import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Spinner } from "..";

const List = ({ children, showDivider, useHover, showLoader, ...props }) => {
  let cls = `uk-list uk-margin-remove-bottom ${useStyles(props)}`;
  if (showDivider) cls += " uk-list-divider";
  if (useHover) cls += " uk-list-use-hover";
  cls = cls || null;
  return (
    <ul className={cls}>
      {!showLoader && children}
      {showLoader && <Spinner />}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showDivider: PropTypes.bool,
  showLoader: PropTypes.bool,
  useHover: PropTypes.bool
};

List.defaultProps = {
  children: null,
  showDivider: false,
  showLoader: false,
  useHover: true
};

List.Item = ({ children, ...props }) => {
  const cls = `uk-margin-remove-top ${useStyles(props)}`;
  return <li className={cls}>{children}</li>;
};

List.Item.propTypes = {
  padding: PropTypes.string
};

List.Item.defaultProps = {
  padding: "xsmall"
};

export default List;
