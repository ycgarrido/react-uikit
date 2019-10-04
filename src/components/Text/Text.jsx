import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Text = ({ children, ...props }) => {
  let cls = useStyles(props) || null;
  return <span className={cls}>{children}</span>;
};

Text.propTypes = {
  children: PropTypes.string
};

Text.defaultProps = {
  children: null
};

export default Text;
