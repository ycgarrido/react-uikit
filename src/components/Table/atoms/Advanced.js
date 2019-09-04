import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../../helpers";
import { Body, Cell, Column, Head, Row, Skeleton } from "./";
import {
  Checkbox,
  Pagination,
  List,
  Container,
  Dropdown,
  Button,
  Grid,
  Limit,
  Modal,
  Search,
  Filter,
  Icon
} from "../../";
import usePreview from "../hooks/usePreview";

const getVisibleColumns = ({ columns }) =>
  columns
    .filter(column => column.config.visible !== false)
    .map(column => column.ui.index);

const handleVisibleColumns = ({
  value,
  visibleColumns,
  column,
  setVisibleColumns
}) => {
  const newVisibleColumns = [...visibleColumns];
  if (value && !visibleColumns.includes(column)) newVisibleColumns.push(column);
  else if (!value && visibleColumns.includes(column))
    newVisibleColumns.splice(visibleColumns.indexOf(column), 1);
  if (newVisibleColumns !== visibleColumns)
    setVisibleColumns(newVisibleColumns);
};

const handleSelection = ({
  value,
  onSelectionChange,
  selectedItems,
  setSelectedItems,
  checked
}) => {
  const newSelectedItems = [...selectedItems];
  if (checked && !selectedItems.includes(value)) newSelectedItems.push(value);
  else if (!checked && selectedItems.includes(value))
    newSelectedItems.splice(selectedItems.indexOf(value), 1);
  if (newSelectedItems !== selectedItems) {
    setSelectedItems(newSelectedItems);
    onSelectionChange({ selected: newSelectedItems });
  }
};

const handleSort = ({ onSortChange, field, sortOption }) => {
  let sort = null;
  if (sortOption === null || sortOption.field !== field)
    sort = { field, value: "asc" };
  else if (sortOption.field === field && sortOption.value === "asc")
    sort = { field, value: "desc" };
  else sort = null;
  onSortChange({ sort });
};

const handleFilters = ({ setShowFilter, showFilter }) => {
  setShowFilter(!showFilter);
};

const handleFiltersChange = () => {
  console.log("si");
};

const Advanced = ({
  columns,
  data,
  onItemClick,
  onLimitChange,
  onPageChange,
  onRemoveItem,
  onSearch,
  onSelectionChange,
  onSortChange,
  limit,
  count,
  page,
  loading,
  sortOption,
  idField,
  showAdvancedFilter,
  showColumnsFilter,
  showLimit,
  showPagination,
  showSelectionColumn,
  showSimpleFilter,
  toolbar,
  noDataLabel,
  ...props
}) => {
  const cls = `uk-table uk-border uk-table-hover uk-table-divider uk-table-small ${useStyles(
    props
  )}`;
  const [visibleColumns, setVisibleColumns] = React.useState(
    getVisibleColumns({ columns })
  );
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [showFilter, setShowFilter] = React.useState(false);
  let removeId = null;
  return (
    <Container className="uk-table-wrapper">
      {loading && <Skeleton />}
      {toolbar}
      {columns.length !== 0 && (
        <Container marginSmallBottom float="right">
          {data.length !== 0 && showSimpleFilter && (
            <Search onChange={onSearch} />
          )}
          {showAdvancedFilter && (
            <Button
              marginSmallLeft
              icon="more"
              size="small"
              onClick={() => handleFilters({ showFilter, setShowFilter })}
            >
              More filters
            </Button>
          )}
          {showFilter && showAdvancedFilter && (
            <Filter
              columns={columns}
              onChange={handleFiltersChange}
              onClose={() => handleFilters({ showFilter, setShowFilter })}
            />
          )}
          {showColumnsFilter && (
            <Dropdown icon=" list" size="small" label="Columns" marginSmallLeft>
              <List>
                {columns.map(col => (
                  <List.Item key={col.ui.index}>
                    <Checkbox
                      defaultChecked={visibleColumns.includes(col.ui.index)}
                      onChange={e =>
                        handleVisibleColumns({
                          value: e.target.checked,
                          visibleColumns,
                          column: col.ui.index,
                          setVisibleColumns
                        })
                      }
                    >
                      {col.ui.label}
                    </Checkbox>
                  </List.Item>
                ))}
              </List>
            </Dropdown>
          )}
        </Container>
      )}
      {data.length !== 0 && (
        <>
          <table className={cls}>
            {columns.length !== 0 && visibleColumns.length !== 0 && (
              <Head>
                <Row>
                  {visibleColumns.length !== 0 && showSelectionColumn && (
                    <Column size="shrink">
                      <Checkbox />
                    </Column>
                  )}
                  {columns.map(col =>
                    visibleColumns.includes(col.ui.index) ? (
                      <Column
                        onClick={() =>
                          handleSort({
                            onSortChange,
                            sortOption,
                            field: col.ui.index
                          })
                        }
                        key={col.ui.index}
                        size={col.config.size}
                        cursor="pointer"
                        sorting={
                          sortOption && sortOption.field === col.ui.index
                            ? sortOption.value
                            : null
                        }
                      >
                        {col.ui.label}
                      </Column>
                    ) : null
                  )}
                  <Column width="small" />
                </Row>
              </Head>
            )}
            {data.length !== 0 && (
              <Body>
                {data.map((row, indexRow) => (
                  <Row key={row[idField]}>
                    {visibleColumns.length !== 0 && showSelectionColumn && (
                      <Cell>
                        <Checkbox
                          onChange={e =>
                            handleSelection({
                              checked: e.target.checked,
                              onSelectionChange,
                              selectedItems,
                              setSelectedItems,
                              value: row[idField]
                            })
                          }
                        />
                      </Cell>
                    )}
                    {columns.map((col, colIndex) =>
                      visibleColumns.includes(col.ui.index) ? (
                        <Cell
                          key={col.ui.index}
                          onClick={() => onItemClick(row)}
                        >
                          {usePreview({
                            type: col.config.type,
                            value: row[col.ui.index],
                            id: `tooltip-${indexRow}-${colIndex}`
                          })}
                        </Cell>
                      ) : null
                    )}
                    <Cell flex="right">
                      <Button
                        tooltip="Edit record"
                        color="text"
                        size="small"
                        icon="file-edit"
                      />
                      <Button
                        tooltip="Remove record"
                        color="text"
                        size="small"
                        icon="trash"
                        marginSmallLeft
                        toggle="target: #remove-modal"
                        onClick={() => (removeId = row[idField])}
                      />
                    </Cell>
                  </Row>
                ))}
              </Body>
            )}
          </table>

          {(showPagination || showLimit) && (
            <Grid>
              {showLimit && (
                <Container>
                  <Limit defaultValue={limit} onChange={onLimitChange} />
                </Container>
              )}
              {showPagination && (
                <Container width="expand">
                  <Pagination
                    flex="right"
                    height="1-1"
                    count={count}
                    page={page}
                    limit={limit}
                    onChange={onPageChange}
                  />
                </Container>
              )}
            </Grid>
          )}
          <Modal.Confirm
            id="remove-modal"
            header="Remove record"
            message="Do you want remove selected record?"
            closeWhenAccept
            onAccept={() => onRemoveItem({ _id: removeId })}
          />
        </>
      )}
      {data.length === 0 && (
        <Container
          className="uk-tile uk-tile-muted"
          marginSmallTop
          padding="small"
        >
          <Icon name="info" ratio={1} marginSmallRight />
          {noDataLabel}
        </Container>
      )}
    </Container>
  );
};

Advanced.propTypes = {
  colums: PropTypes.arrayOf(
    PropTypes.shape({
      ui: PropTypes.shape({
        index: PropTypes.string,
        label: PropTypes.string
      }),
      config: PropTypes.objectOf(PropTypes.any)
    })
  ),
  count: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  idField: PropTypes.string,
  limit: PropTypes.number,
  loading: PropTypes.bool,
  noDataLabel: PropTypes.string,
  onItemClick: PropTypes.func,
  onLimitChange: PropTypes.func,
  onPageChange: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onSearch: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSortChange: PropTypes.func,
  page: PropTypes.number,
  sortOption: PropTypes.objectOf(PropTypes.any),
  showAdvancedFilter: PropTypes.bool,
  showColumnsFilter: PropTypes.bool,
  showLimit: PropTypes.bool,
  showPagination: PropTypes.bool,
  showSelectionColumn: PropTypes.bool,
  showSimpleFilter: PropTypes.bool,
  toolbar: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Advanced.defaultProps = {
  columns: [],
  count: null,
  data: [],
  idField: "_id",
  limit: 10,
  loading: false,
  noDataLabel: "No data to show.",
  onItemClick: () => {},
  onLimitChange: () => {},
  onPageChange: () => {},
  onRemoveItem: () => {},
  onSearch: () => {},
  onSelectionChange: () => {},
  onSortChange: () => {},
  page: null,
  sortOption: null,
  showAdvancedFilter: true,
  showColumnsFilter: true,
  showLimit: true,
  showPagination: true,
  showSelectionColumn: true,
  showSimpleFilter: true,
  toolbar: null
};

export default Advanced;
