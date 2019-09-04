import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Container } from "../";

const Navbar = ({ transparent, sticky, children, ...props }) => {
  let cls = `uk-navbar-container ${useStyles(props)}`;
  if (transparent) cls += ` uk-navbar-transparent`;
  return (
    <nav className={cls} data-uk-navbar data-uk-sticky={sticky}>
      {children}
    </nav>
  );
};

Navbar.Right = ({ children, ...props }) => {
  let cls = `uk-navbar-right ${useStyles(props)}`;
  return <Container className={cls}>{children}</Container>;
};

Navbar.Left = ({ children, ...props }) => {
  let cls = `uk-navbar-left ${useStyles(props)}`;
  return <Container className={cls}>{children}</Container>;
};

Navbar.Nav = ({ children, ...props }) => {
  let cls = `uk-navbar-nav uk-height-100 ${useStyles(props)}`;
  return <ul className={cls}>{children}</ul>;
};

Navbar.Item = ({ children, ...props }) => {
  let cls = `uk-flex uk-flex-middle ${useStyles(props)}`;
  return <li className={cls}>{children}</li>;
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
