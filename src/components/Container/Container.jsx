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
  let { className } = useStyles({ props });
  className += className ? `uk-content ${className}` : "uk-content";
  if (size) className += ` uk-container uk-container-${size}`;
  className = className || null;
  return (
    <div
      data-uk-height-match={heightMatch}
      className={className}
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
