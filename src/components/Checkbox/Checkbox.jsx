import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Container } from "../";

const Checkbox = ({
  defaultChecked,
  label,
  labelAlign,
  onChange,
  ...props
}) => {
  let cls = `uk-checkbox ${useStyles(props)}`;
  cls = cls || null;

  const Label = (
    <label className="uk-form-label uk-margin-small-left uk-margin-small-right">
      {label}
    </label>
  );

  return (
    <>
      {label && labelAlign === "top" && Label}
      <Container className="uk-form-controls">
        {label && labelAlign === "left" && Label}
        <input
          className={cls}
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        {label && labelAlign === "right" && Label}
      </Container>
      {label && labelAlign === "bottom" && Label}
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  labelAlign: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  label: null,
  defaultChecked: false,
  labelAlign: "top",
  onChange: () => {}
};

export default Checkbox;
