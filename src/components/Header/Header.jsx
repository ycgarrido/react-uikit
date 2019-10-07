import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../helpers/useStyles";

const Header = ({ type, children, ...props }) => {
  const Type = type;
  const className = useStyles(props) || null;

  return <Type className={className}>{children}</Type>;
};

Header.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType(
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  )
};

Header.defaultProps = {
  type: "h2",
  children: null
};

export default Header;
