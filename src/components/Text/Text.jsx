import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Text = ({ children, onClick, onMouseEnter, onMouseLeave, ...props }) => {
  let cls = useStyles(props) || null;
  return (
    <span
      className={cls}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

Text.defaultProps = {
  children: null,
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {}
};

export default Text;
