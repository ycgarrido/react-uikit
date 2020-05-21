import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Header = ({ type, children, ...props }) => {
  const Type = type;
  let { className } = useStyles({ props });
  className = className || null;

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
