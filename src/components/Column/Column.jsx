import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Column = ({ children, childrenWidth, divider, ...props }) => {
  let { className } = useStyles({ props });
  className += className
    ? `${className} uk-column-${childrenWidth}`
    : `uk-column-${childrenWidth}`;
  if (divider) className += ` uk-column-divider`;
  return <div className={className}>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  childrenWidth: PropTypes.string,
  divider: PropTypes.bool
};

Column.defaultProps = {
  children: null,
  childrenWidth: "1-2",
  divider: false
};

export default Column;
