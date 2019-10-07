import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Tile = ({ children, ...props }) => {
  let cls = `uk-tile ${useStyles(props)}`;
  return <div className={cls}>{children}</div>;
};

Tile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

Tile.defaultProps = {
  children: null
};

export default Tile;
