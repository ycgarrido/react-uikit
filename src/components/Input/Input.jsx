import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Icon, Container } from "../";

const Input = ({
  type,
  icon,
  iconAlign,
  iconRatio,
  placeholder,
  onChange,
  onValid,
  debounce,
  label,
  defaultValue,
  required,
  maxLength,
  minLength,
  name,
  ...props
}) => {
  const [valid, setValid] = React.useState(true);
  let cls = `uk-inline ${useStyles(props)}`;
  cls = cls || null;
  let lastChange = null;
  let inputCls = "uk-input";
  if (!valid) inputCls += ` uk-form-danger`;

  const checkValid = ({ value }) => {
    if (required && (!value || !value.trim())) return false;
    if (minLength && value && value.length < minLength) return false;
    if (maxLength && value && value.length > maxLength) return false;
    return true;
  };

  const handleChange = ({ value }) => {
    let _valid = true;
    lastChange = new Date().getTime();
    if (debounce >= 100)
      setTimeout(() => {
        if (
          lastChange &&
          new Date().getTime() - lastChange >= debounce &&
          new Date().getTime() - lastChange <= debounce + 5
        ) {
          _valid = checkValid({ value });
          if (valid !== _valid) setValid(_valid);
          if (_valid) onChange({ value });
          onValid({ valid: _valid, name });
        }
      }, debounce);
    else onChange({ value });
  };

  return (
    <Container className={cls}>
      {label && (
        <label className="uk-form-label">
          {label}
          {required && <span className="uk-text-danger uk-text-bold">*</span>}
        </label>
      )}
      <Container className="uk-form-controls">
        {icon && iconAlign === "left" && (
          <Icon name={icon} className="uk-form-icon" ratio={iconRatio} />
        )}
        <input
          className={inputCls}
          type={type}
          placeholder={placeholder}
          onChange={e => handleChange({ value: e.target.value })}
          defaultValue={defaultValue}
          name={name}
        />
        {icon && iconAlign === "right" && (
          <Icon name={icon} className="uk-form-icon" ratio={iconRatio} />
        )}
      </Container>
    </Container>
  );
};

Input.propTypes = {
  debounce: PropTypes.number,
  defaultValue: PropTypes.string,
  icon: PropTypes.string,
  iconAlign: PropTypes.oneOf(["left", "right"]),
  iconRatio: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  onChange: PropTypes.func,
  onValid: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
};

Input.defaultProps = {
  debounce: 1000,
  defaultValue: "",
  icon: null,
  iconAlign: "left",
  iconRatio: 0.7,
  label: null,
  name: null,
  maxLength: null,
  minLength: null,
  onChange: () => {},
  onValid: () => {},
  placeholder: null,
  required: false,
  type: "text"
};

export default React.memo(Input);
