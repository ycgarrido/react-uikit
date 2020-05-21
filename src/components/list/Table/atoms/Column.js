import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Icon from "../../../basic/Icon";

const Column = ({ children, size, sorting, onClick, ...props }) => {
  let { className } = useStyles({ props });
  if (size) className += ` uk-table-${size}`;
  className = className || null;
  return (
    <th className={className} onClick={onClick}>
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

Column.defaultProps = {
  onClick: () => {},
  size: null,
  sorting: null
};

export default Column;
