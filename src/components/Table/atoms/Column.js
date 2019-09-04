import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../../helpers";
import { Icon } from "../../";

const Column = ({ children, size, sorting, onClick, ...props }) => {
  let cls = `${useStyles(props)}`;
  if (size) cls += ` uk-table-${size}`;
  cls = cls || null;
  return (
    <th className={cls} onClick={onClick}>
      <div>
        {children}
        {sorting && (
          <Icon name={sorting === "asc" ? "triangle-up" : " triangle-down"} />
        )}
      </div>
    </th>
  );
};

Column.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf([null, "shrink", "expand", "small"]),
  sorting: PropTypes.oneOf(["asc", "desc"])
};

Column.defaulProps = {
  onClick: () => {},
  size: null,
  sorting: null
};

export default Column;
