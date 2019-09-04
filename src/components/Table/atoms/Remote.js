import React from "react";
import PropTypes from "prop-types";
import { Advanced } from "./";
import { Button, Modal } from "../../";

const Remote = ({
  columns,
  findData,
  findCount,
  removeData,
  onCount,
  idField,
  onCreate
}) => {
  const [loadingData, setLoadingData] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [selectedItems, setSelectedItems] = React.useState([]);
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
        setData(response);
        setLoadingData(false);
      })
      .catch(() => {
        setLoadingData(false);
      });
  };

  const _count = ({ query }) => {
    findCount({ query }).then(response => {
      setCount(response);
      onCount({ count: response });
    });
  };

  const onPageChange = ({ page }) => {
    setPage(page);
    _find({ limit, page, sort, query });
  };

  const onSelectionChange = ({ selected }) => {
    setSelectedItems(selected);
  };

  const removeSelected = () => {
    alert("Remove selected");
  };

  const onRemove = ({ _id }) => {
    removeData({ _id }).then(() => {
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

  return (
    <>
      <Button color="primary" size="small" float="left" onClick={onCreate}>
        Add New
      </Button>
      {selectedItems.length !== 0 && (
        <>
          <Button
            marginSmallLeft
            color="danger"
            size="small"
            float="left"
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
      <Advanced
        columns={columns}
        data={data}
        limit={limit}
        onPageChange={onPageChange}
        onLimitChange={onLimitChange}
        onRemoveItem={onRemove}
        onSearch={onSearch}
        onSelectionChange={onSelectionChange}
        onSortChange={onSortChange}
        count={count}
        page={page}
        loading={loadingData}
        sortOption={sort}
        idField={idField}
      />
    </>
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
  removeData: PropTypes.func
};

Remote.defaultProps = {
  columns: [],
  idField: "_id",
  findData: () => new Promise(resolve => resolve([])),
  findCount: () => new Promise(resolve => resolve(0)),
  onCount: () => {},
  onCreate: () => {},
  removeData: () => new Promise(resolve => resolve(false))
};

export default React.memo(Remote);
