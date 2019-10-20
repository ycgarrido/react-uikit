import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Container = ({
  children,
  id,
  heightMatch,
  size,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  let cls = `uk-content ${useStyles(props)}`;
  if (size) cls += ` uk-container uk-container-${size}`;
  cls = cls || null;
  return (
    <div
      data-uk-height-match={heightMatch}
      className={cls}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  heightMatch: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf([null, "small", "large", "expand"]),
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

Container.defaultProps = {
  children: null,
  className: null,
  heightMatch: null,
  id: null,
  size: null,
  onMouseEnter: () => {},
  onMouseLeave: () => {}
};

export default Container;
