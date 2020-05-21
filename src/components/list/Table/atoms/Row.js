import React from "react";
import PropTypes from "prop-types";

const Row = ({ children, selected, onClick }) => (
  <tr className={selected ? `uk-row-selected` : ""} onClick={onClick}>
    {children}
  </tr>
);

Row.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

Row.defaultProps = {
  onClick: () => {},
  selected: false
};

export default Row;
