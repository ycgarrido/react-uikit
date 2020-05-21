import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Container from "../Container";

const Navbar = ({ transparent, sticky, children, ...props }) => {
  let { className } = useStyles({ props });
  className += ` uk-navbar-container`;
  if (transparent) className += ` uk-navbar-transparent`;
  return (
    <nav className={className} data-uk-navbar data-uk-sticky={sticky}>
      {children}
    </nav>
  );
};

Navbar.Right = ({ children, ...props }) => {
  let { className } = useStyles({ props });
  className += ` uk-navbar-right`;
  return <Container className={className}>{children}</Container>;
};

Navbar.Left = ({ children, ...props }) => {
  let { className } = useStyles({ props });
  className += ` uk-navbar-left`;
  return <Container className={className}>{children}</Container>;
};

Navbar.Nav = ({ children, ...props }) => {
  let { className } = useStyles({ props });
  className += ` uk-navbar-nav uk-height-100`;
  return <ul className={className}>{children}</ul>;
};

Navbar.Item = ({ children, ...props }) => {
  let { className } = useStyles({ props });
  className += ` uk-flex uk-flex-middle`;
  return <li className={className}>{children}</li>;
};

Navbar.propTyes = {
  transparent: PropTypes.bool,
  sticky: PropTypes.string
};

Navbar.defaultProps = {
  transparent: false,
  sticky: null
};

export default Navbar;
