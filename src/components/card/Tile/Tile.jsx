import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Tile = ({ children, ...props }) => {
  let { className } = useStyles({ props });
  className = className ? `uk-tile ${className}` : `uk-tile`;
  return <div className={className}>{children}</div>;
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
