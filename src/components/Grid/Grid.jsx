import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Grid = ({ children, size, ...props }) => {
  let cls = `uk-grid ${useStyles(props)}`;
  if (size) cls += ` uk-grid-${size}`;
  cls = cls || null;
  return (
    <div data-uk-grid className={cls}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "collapse"])
};

Grid.defaultProps = {
  children: null,
  className: null,
  size: null
};

export default Grid;
