import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Body from "./Body";
import Cell from "./Cell";
import Column from "./Column";
import Head from "./Head";
import Row from "./Row";
import Checkbox from "../../../basic/Checkbox";
import Pagination from "../../Pagination";
import List from "../../List";
import Loader from "../../../basic/Loader";
import Container from "../../../layout/Container";
import Dropdown from "../../../basic/Dropdown";
import Button from "../../../basic/Button";
import Grid from "../../../layout/Grid";
import Limit from "../../Limit";
import Modal from "../../../basic/Modal";
import Search from "../../../basic/Search";
import Filter from "../../Filter";
import Icon from "../../../basic/Icon";
import usePreview from "../hooks/usePreview";
import useId from "../../../../hooks/useId";

const getVisibleColumns = ({ columns }) => {
  return columns
    .filter(column => column.config.visible !== false)
    .map(column => column.ui.index);
};

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
  checked,
  selectionType
}) => {
  let newSelectedItems = [...selectedItems];
  if (checked && !selectedItems.includes(value)) {
    if (selectionType === "multiple") newSelectedItems.push(value);
    else newSelectedItems = [value];
  } else if (!checked && selectedItems.includes(value))
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
  //Here filter change code
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
  onUpdate,
  limit,
  count,
  page,
  loading,
  sortOption,
  idField,
  renderRemoveButton,
  renderUpdateButton,
  selectionMode,
  showAdvancedFilter,
  showColumns,
  showColumnsFilter,
  showLimit,
  showPagination,
  selectional,
  showSimpleFilter,
  toolbar,
  noDataLabel,
  selectionType,
  ...props
}) => {
  let { className } = useStyles({ props });
  className += ` uk-table uk-border uk-table-hover uk-table-divider uk-table-small uk-margin-remove-top uk-margin-small-bottom`;
  const [visibleColumns, setVisibleColumns] = React.useState(
    getVisibleColumns({ columns })
  );
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [showFilter, setShowFilter] = React.useState(false);
  const _id = useId();
  let removeId = null;
  return (
    <>
      <Container className="uk-table-wrapper" style={{ position: "relative" }}>
        {loading && <Loader />}
        {(toolbar || columns.length === 0) && (
          <Grid style={{ marginBottom: "12px" }}>
            {toolbar && (
              <Container
                style={{
                  display: "flex",
                  alignItems: "start",
                  flex: "1",
                  margin: "0"
                }}
              >
                {toolbar}
              </Container>
            )}
            {columns.length !== 0 && (
              <Container
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flex: "1",
                  margin: "0"
                }}
              >
                {showSimpleFilter && (
                  <Search
                    onChange={onSearch}
                    style={{
                      ".uk-form-controls .uk-input": { height: "30px" }
                    }}
                  />
                )}
                {showAdvancedFilter && (
                  <Button
                    style={{ marginLeft: "12px" }}
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
                  <Dropdown
                    icon=" list"
                    size="small"
                    label="Columns"
                    style={{ marginLeft: "12px" }}
                  >
                    <List style={{ marginBottom: "0", padding: "6px" }}>
                      {columns.map(col => (
                        <List.Item
                          key={col.ui.index}
                          style={{ marginTop: "0!important" }}
                        >
                          <Checkbox
                            checked={visibleColumns.includes(col.ui.index)}
                            onChange={e =>
                              handleVisibleColumns({
                                value: e.target.checked,
                                visibleColumns,
                                column: col.ui.index,
                                setVisibleColumns
                              })
                            }
                            label={col.ui.label}
                            labelAlign="right"
                          ></Checkbox>
                        </List.Item>
                      ))}
                    </List>
                  </Dropdown>
                )}
              </Container>
            )}
          </Grid>
        )}
        {data.length !== 0 && (
          <>
            <table className={className}>
              {columns.length !== 0 &&
                visibleColumns.length !== 0 &&
                showColumns && (
                  <Head>
                    <Row>
                      {visibleColumns.length !== 0 &&
                        selectional &&
                        selectionMode === "check" && (
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
                      <Column style={{ width: "48px" }} />
                    </Row>
                  </Head>
                )}
              <Body>
                {data.map((row, indexRow) => (
                  <Row
                    key={row[idField]}
                    selected={
                      selectional &&
                      selectionMode === "row" &&
                      selectedItems.includes(row[idField])
                    }
                    onClick={() => {
                      if (selectionMode === "row" && selectional)
                        handleSelection({
                          checked: !selectedItems.includes(row[idField]),
                          onSelectionChange,
                          selectedItems,
                          setSelectedItems,
                          value: row[idField],
                          selectionType
                        });
                    }}
                  >
                    {visibleColumns.length !== 0 &&
                      selectional &&
                      selectionMode === "check" && (
                        <Cell>
                          <Checkbox
                            onChange={e =>
                              handleSelection({
                                checked: e.target.checked,
                                onSelectionChange,
                                selectedItems,
                                setSelectedItems,
                                value: row[idField],
                                selectionType
                              })
                            }
                          />
                        </Cell>
                      )}
                    {columns.map((col, colIndex) =>
                      visibleColumns.includes(col.ui.index) ? (
                        <Cell
                          key={col.ui.index}
                          onClick={() => onItemClick({ item: row })}
                        >
                          {usePreview({
                            type: col.config.type,
                            value: row[col.ui.index],
                            id: `tooltip-${indexRow}-${colIndex}`
                          })}
                        </Cell>
                      ) : null
                    )}
                    <Cell>
                      {renderUpdateButton({ item: row }) && (
                        <Button
                          tooltip="Edit record"
                          color="text"
                          size="small"
                          icon="file-edit"
                          onClick={() =>
                            onUpdate({
                              _id: row[idField],
                              item: row,
                              index: indexRow
                            })
                          }
                        />
                      )}
                      {renderRemoveButton({ item: row }) && (
                        <Button
                          tooltip="Remove record"
                          color="text"
                          size="small"
                          icon="trash"
                          style={{ marginLeft: "12px" }}
                          toggle={`target: #remove-modal-table-${_id}`}
                          onClick={() => (removeId = row[idField])}
                        />
                      )}
                    </Cell>
                  </Row>
                ))}
              </Body>
            </table>

            {(showPagination || showLimit) && (
              <Grid>
                <Container style={{ display: "flex", width: "100%" }}>
                  {showLimit && (
                    <Container style={{ marginRight: "auto" }}>
                      <Limit defaultValue={limit} onChange={onLimitChange} />
                    </Container>
                  )}
                  {showPagination && (
                    <Pagination
                      count={count}
                      page={page}
                      limit={limit}
                      onChange={onPageChange}
                      style={{ marginTop: "0px" }}
                    />
                  )}
                </Container>
              </Grid>
            )}
          </>
        )}
        {data.length === 0 && (
          <Container
            className="uk-tile uk-tile-muted"
            style={{ marginTop: "12px", padding: "12px" }}
          >
            <Icon name="info" ratio={1} style={{ marginRight: "12px" }} />
            {noDataLabel}
          </Container>
        )}
      </Container>
      <Modal.Confirm
        id={`remove-modal-table-${_id}`}
        header="Remove record"
        message="Do you want remove selected record?"
        closeWhenAccept
        onAccept={() => {
          onRemoveItem({ _id: removeId });
        }}
      />
    </>
  );
};

Advanced.propTypes = {
  columns: PropTypes.arrayOf(
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
  onUpdate: PropTypes.func,
  page: PropTypes.number,
  renderRemoveButton: PropTypes.func,
  renderUpdateButton: PropTypes.func,
  selectionMode: PropTypes.oneOf(["row", "check"]),
  sortOption: PropTypes.objectOf(PropTypes.any),
  showAdvancedFilter: PropTypes.bool,
  showColumnsFilter: PropTypes.bool,
  showColumns: PropTypes.bool,
  showLimit: PropTypes.bool,
  showPagination: PropTypes.bool,
  selectional: PropTypes.bool,
  selectionType: PropTypes.oneOf(["single", "multiple"]),
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
  onUpdate: () => {},
  page: null,
  renderRemoveButton: () => true,
  renderUpdateButton: () => true,
  selectionMode: "check",
  sortOption: null,
  showAdvancedFilter: true,
  showColumns: true,
  showColumnsFilter: true,
  showLimit: true,
  showPagination: true,
  selectional: true,
  selectionType: "multiple",
  showSimpleFilter: true,
  toolbar: null
};

export default Advanced;
