import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Column = ({ children, childrenWidth, divider, ...props }) => {
  let cls = `uk-column-${childrenWidth} ${useStyles(props)}`;
  if (divider) cls += ` uk-column-divider`;
  return <div class={cls}>{children}</div>;
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
  divider: true
};

export default Column;
