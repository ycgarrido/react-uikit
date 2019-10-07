import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Icon from "../Icon";

const Button = ({
  children,
  color,
  size,
  onClick,
  icon,
  iconAlign,
  iconRatio,
  toggle,
  disabled,
  tooltip,
  ...props
}) => {
  let cls = `uk-button ${useStyles(props)}`;
  if (color) cls += ` uk-button-${color}`;
  if (size) cls += ` uk-button-${size}`;
  return (
    <button
      className={cls}
      onClick={onClick}
      data-uk-toggle={toggle}
      disabled={disabled}
      title={tooltip}
      data-uk-tooltip={tooltip}
    >
      {icon && iconAlign === "left" && (
        <Icon name={icon} marginSmallRight={!!children} ratio={iconRatio} />
      )}
      {children}
      {icon && iconAlign === "right" && (
        <Icon name={icon} marginSmallLeft={!!children} ratio={iconRatio} />
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "default",
    "secondary",
    "danger",
    "text",
    "link"
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconAlign: PropTypes.oneOf(["left", "right"]),
  iconRatio: PropTypes.number,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  toggle: PropTypes.string,
  tooltip: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: null,
  color: "default",
  disabled: false,
  icon: null,
  iconAlign: "left",
  iconRatio: 0.7,
  onClick: () => {},
  size: null,
  toggle: null,
  tooltip: null
};

export default Button;
