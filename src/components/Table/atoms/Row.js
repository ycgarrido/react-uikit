import React from "react";
import PropTypes from "prop-types";

const Row = ({ children, onClick }) => <tr onClick={onClick}>{children}</tr>;

Row.propTypes = {
  onClick: PropTypes.func
};

Row.defaultProps = {
  onClick: () => {}
};

export default Row;
