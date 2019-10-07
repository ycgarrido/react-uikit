import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Cell = ({ children, onClick, ...props }) => {
  let cls = useStyles(props);
  cls = cls || null;
  return (
    <td className={cls} onClick={onClick}>
      {children}
    </td>
  );
};

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
};

Cell.defaultProps = {
  children: null,
  onClick: () => {}
};

export default Cell;
