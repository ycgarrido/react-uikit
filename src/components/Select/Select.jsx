import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../helpers/useStyles";

const Select = ({
  className,
  options,
  labelField,
  valueField,
  onChange,
  onValid,
  defaultValue,
  label,
  icon,
  iconAlign,
  iconRatio,
  required,
  name,
  ...props
}) => {
  const [valid, setValid] = React.useState(true);
  let cls = `uk-select ${useStyles(props)}`;
  if (!valid) cls += ` uk-form-danger`;
  cls = cls || null;

  const checkValid = ({ value }) => {
    if (required && !value) return false;
    return true;
  };

  const handleChange = e => {
    const _valid = checkValid({ value: e.target.value });
    if (valid !== _valid) setValid(_valid);
    if (_valid) onChange(e);
    onValid({ valid: _valid, name });
  };

  return (
    <>
      {label && (
        <label className="uk-form-label">
          {label}
          {required && <span className="uk-text-danger uk-text-bold">*</span>}
        </label>
      )}
      <div className="uk-form-controls">
        {icon && iconAlign === "left" && (
          <Icon name={icon} className="uk-form-icon" ratio={iconRatio} />
        )}
        <select
          className={cls}
          onChange={handleChange}
          defaultValue={defaultValue}
          name={name}
        >
          {options.map(option => (
            <option key={option[valueField]} value={option[valueField]}>
              {option[labelField]}
            </option>
          ))}
        </select>
        {icon && iconAlign === "right" && (
          <Icon name={icon} className="uk-form-icon" ratio={iconRatio} />
        )}
      </div>
    </>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  icon: PropTypes.string,
  iconAlign: PropTypes.oneOf(["left", "right"]),
  iconRatio: PropTypes.number,
  label: PropTypes.string,
  labelField: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onValid: PropTypes.func,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  ]),
  required: PropTypes.bool,
  valueField: PropTypes.string
};

Select.defaultProps = {
  className: null,
  defaultValue: null,
  icon: null,
  iconAlign: "left",
  iconRatio: 0.7,
  label: null,
  labelField: "label",
  name: null,
  onChange: () => {},
  onValid: () => {},
  options: [],
  required: null,
  valueField: "value"
};

export default Select;
