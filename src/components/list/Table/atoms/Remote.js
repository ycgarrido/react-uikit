import React from "react";
import PropTypes from "prop-types";
import Advanced from "./Advanced";
import Button from "../../../basic/Button";
import Modal from "../../../basic/Modal";

const Remote = ({
  columns,
  findData,
  findCount,
  removeData,
  onCount,
  idField,
  onItemClick,
  onCreate,
  onUpdate,
  renderRemoveButton,
  renderUpdateButton,
  selectionMode,
  showAdvancedFilter,
  showColumns,
  showColumnsFilter,
  showLimit,
  showPagination,
  seleccionable,
  showSimpleFilter,
  selectionType,
  onSelectionChange,
  showAddButton,
  forwardRef
}) => {
  const [loadingData, setLoadingData] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState(null);
  const [query, setQuery] = React.useState(null);

  React.useEffect(() => {
    _find({ limit, page, sort, query });
    _count({ query });
  }, []);

  const onLimitChange = ({ limit }) => {
    setLimit(limit);
    _find({ limit, page, sort, query });
  };

  const _find = ({ limit, page, sort, query }) => {
    setLoadingData(true);
    findData({
      limit,
      page,
      sort,
      query
    })
      .then(response => {
        if (Array.isArray(response)) setData(response);
        setLoadingData(false);
      })
      .catch(() => {
        setLoadingData(false);
        UIkit.notification(
          `<span uk-icon='icon: warning'></span> Some error ocurred when find data`,
          {
            status: "warning"
          }
        );
      });
  };

  const _count = ({ query }) => {
    findCount({ query })
      .then(response => {
        if (Number(response)) setCount(response);
        onCount({ count: response });
      })
      .catch(() => {
        UIkit.notification(
          `<span uk-icon='icon: warning'></span> Some error ocurred when find count`,
          {
            status: "warning"
          }
        );
      });
  };

  const onPageChange = ({ page }) => {
    setPage(page);
    _find({ limit, page, sort, query });
  };

  const handleSelection = ({ selected }) => {
    onSelectionChange({
      selected,
      items: data.filter(d => selected.includes(d[idField]))
    });
  };

  const removeSelected = () => {
    alert("Remove selected");
  };

  const onRemove = ({ _id }) => {
    removeData({ _id }).then(() => {
      UIkit.notification(
        `<span uk-icon='icon: check'></span> Element has been deleted`,
        {
          status: "primary"
        }
      );
      _find({ limit, page, sort, query });
    });
  };

  const onSortChange = ({ sort }) => {
    setSort(sort);
    _find({ limit, page, sort, query });
  };

  const onSearch = ({ value }) => {
    setQuery(value);
    _find({ limit, page, sort, query: value });
    _count({ query: value });
  };

  const reload = () => {
    _find({ limit, page, sort, query });
    _count({ query });
  };

  React.useImperativeHandle(forwardRef, () => ({
    reload
  }));

  return (
    <Advanced
      columns={columns}
      data={data}
      limit={limit}
      onItemClick={onItemClick}
      onPageChange={onPageChange}
      onLimitChange={onLimitChange}
      onRemoveItem={onRemove}
      onSearch={onSearch}
      onSelectionChange={handleSelection}
      onSortChange={onSortChange}
      onUpdate={onUpdate}
      count={count}
      page={page}
      loading={loadingData}
      sortOption={sort}
      idField={idField}
      renderRemoveButton={renderRemoveButton}
      renderUpdateButton={renderUpdateButton}
      selectionMode={selectionMode}
      showAdvancedFilter={showAdvancedFilter}
      showColumns={showColumns}
      showColumnsFilter={showColumnsFilter}
      showLimit={showLimit}
      showPagination={showPagination}
      seleccionable={seleccionable}
      selectionType={selectionType}
      showSimpleFilter={showSimpleFilter}
      toolbar={
        <>
          {showAddButton && (
            <Button color="primary" size="small" onClick={onCreate}>
              Add New
            </Button>
          )}
          {false && (
            <>
              <Button
                marginSmallLeft
                color="danger"
                size="small"
                toggle="target: #remove-all-modal"
              >
                Remove
              </Button>
              <Modal.Confirm
                id="remove-all-modal"
                header="Remove records"
                message="Do you want remove selected records?"
                onAccept={removeSelected}
              />
            </>
          )}
        </>
      }
    />
  );
};

Remote.propTypes = {
  colums: PropTypes.arrayOf(
    PropTypes.shape({
      ui: PropTypes.shape({
        index: PropTypes.string,
        label: PropTypes.string
      }),
      config: PropTypes.objectOf(PropTypes.any)
    })
  ),
  idField: PropTypes.string,
  findData: PropTypes.func,
  findCount: PropTypes.func,
  onCount: PropTypes.func,
  onCreate: PropTypes.func,
  onItemClick: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onUpdate: PropTypes.func,
  removeData: PropTypes.func,
  renderRemoveButton: PropTypes.func,
  renderUpdateButton: PropTypes.func,
  selectionMode: PropTypes.oneOf(["row", "check"]),
  selectionType: PropTypes.oneOf(["single", "multiple"]),
  showAddButton: PropTypes.bool,
  showAdvancedFilter: PropTypes.bool,
  showColumns: PropTypes.bool,
  showColumnsFilter: PropTypes.bool,
  showLimit: PropTypes.bool,
  showPagination: PropTypes.bool,
  seleccionable: PropTypes.bool,
  showSimpleFilter: PropTypes.bool,
  forwardRef: PropTypes.objectOf(PropTypes.any)
};

Remote.defaultProps = {
  columns: [],
  idField: "_id",
  findData: () => new Promise(resolve => resolve([])),
  findCount: () => new Promise(resolve => resolve(0)),
  onCount: () => {},
  onCreate: () => {},
  onItemClick: () => {},
  onSelectionChange: () => {},
  onUpdate: () => {},
  removeData: () => new Promise(resolve => resolve(false)),
  renderRemoveButton: () => true,
  renderUpdateButton: () => true,
  selectionMode: "check",
  showAddButton: true,
  showAdvancedFilter: true,
  showColumns: true,
  showColumnsFilter: true,
  showLimit: true,
  showPagination: true,
  seleccionable: true,
  selectionType: "multiple",
  showSimpleFilter: true,
  forwardRef: null
};

export default React.memo(Remote);
