import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Spinner from "../Spinner";

const List = ({ children, showDivider, useHover, showLoader, ...props }) => {
  let cls = `uk-list ${useStyles(props)}`;
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

List.Item = ({ children, onClick, ...props }) => {
  const cls = useStyles(props);
  return (
    <li className={cls} onClick={onClick}>
      {children}
    </li>
  );
};

List.Item.propTypes = {
  onClick: PropTypes.func,
  "style-padding": PropTypes.string
};

List.Item.defaultProps = {
  onClick: () => {},
  "style-padding": "5px"
};

export default List;
