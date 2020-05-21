import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Cell = ({ children, onClick, ...props }) => {
  let { className } = useStyles({ props });
  className = className || null;
  return (
    <td className={className} onClick={onClick}>
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
