import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Grid = ({ children, size, ...props }) => {
  let { className } = useStyles({ props });
  className = className ? `uk-grid ${className}` : "uk-grid";
  if (size) className += ` uk-grid-${size}`;
  className = className || null;
  return (
    <div data-uk-grid className={className}>
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
