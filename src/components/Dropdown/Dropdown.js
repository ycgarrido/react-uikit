import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Button from "../Button";

const Dropdown = ({ children, icon, label, color, size, ...props }) => {
  let cls = `${useStyles(props)}`;
  cls = cls || null;
  return (
    <>
      <Button className={cls} icon={icon} size={size} color={color}>
        {label}
      </Button>
      <div
        data-uk-dropdown="mode: click;pos: bottom-right"
        className="uk-padding-remove"
      >
        {children}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  color: PropTypes.oneOf([
    "primary",
    "default",
    "secondary",
    "danger",
    "text",
    "link"
  ]),
  icon: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Dropdown.defaultProps = {
  children: null,
  color: "default",
  icon: null,
  label: null,
  size: null
};

export default Dropdown;
