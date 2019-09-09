import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Icon, Container } from "../";
import checkValidInput from "../Form/helpers/checkValidInput";

class Input extends React.Component {
  state = {
    valid: true,
    value: this.props.value
  };
  lastChange = null;

  componentDidUpdate = prevProps => {
    this.onUpdate(prevProps);
  };

  onUpdate = prevProps => {
    const { value } = this.props;
    if (value !== prevProps.value) this.setState({ value });
  };

  handleChange = ({ value }) => {
    const { onChange, onValid, debounce, name } = this.props;
    const { valid } = this.state;
    let _valid = true;
    this.lastChange = new Date().getTime();
    this.setState({ value }, () => {
      if (debounce >= 100)
        setTimeout(() => {
          if (
            this.lastChange &&
            new Date().getTime() - this.lastChange >= debounce &&
            new Date().getTime() - this.lastChange <= debounce + 20
          ) {
            this.lastChange = null;
            _valid = checkValidInput({ ...this.props, value });
            if (valid !== _valid) this.setState({ valid: _valid });
            onChange({ value });
            onValid({ valid: _valid, name });
          }
        }, debounce);
      else onChange({ value });
    });
  };

  render = () => {
    const {
      type,
      icon,
      iconAlign,
      iconRatio,
      placeholder,
      label,
      required,
      name,
      rows
    } = this.props;
    const { value, valid } = this.state;
    let cls = `uk-inline ${useStyles(this.props)}`;
    cls = cls || null;
    let inputCls = type === "textarea" ? "uk-textarea" : "uk-input";
    if (!valid) inputCls += ` uk-form-danger`;

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
          {type !== "textarea" && (
            <input
              className={inputCls}
              type={type}
              placeholder={placeholder}
              onChange={e => this.handleChange({ value: e.target.value })}
              value={value}
              name={name}
            />
          )}
          {type === "textarea" && (
            <textarea
              className={inputCls}
              placeholder={placeholder}
              onChange={e => this.handleChange({ value: e.target.value })}
              value={value}
              name={name}
              rows={rows}
            />
          )}
          {icon && iconAlign === "right" && (
            <Icon name={icon} className="uk-form-icon" ratio={iconRatio} />
          )}
        </Container>
      </Container>
    );
  };
}

Input.propTypes = {
  debounce: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  rows: PropTypes.number,
  type: PropTypes.string
};

Input.defaultProps = {
  debounce: 1000,
  value: "",
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
  rows: 5,
  type: "text"
};

export default Input;
