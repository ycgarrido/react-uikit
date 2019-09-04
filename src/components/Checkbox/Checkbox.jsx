import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Container } from "../";

const Checkbox = ({ defaultChecked, label, onChange, ...props }) => {
  let cls = `uk-checkbox ${useStyles(props)}`;
  cls = cls || null;
  return (
    <>
      {label && <label className="uk-form-label">{label}</label>}
      <Container className="uk-form-controls">
        <input
          className={cls}
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
      </Container>
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  label: null,
  defaultChecked: false,
  onChange: () => {}
};

export default Checkbox;
