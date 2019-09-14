import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Container } from "../";

const Checkbox = ({ checked, label, labelAlign, onChange, ...props }) => {
  const [_checked, _setChecked] = React.useState(checked);
  let cls = `uk-checkbox ${useStyles(props)}`;
  cls = cls || null;

  React.useEffect(() => {
    if (checked !== _checked) _setChecked(checked);
  }, [checked]);

  const Label = (
    <label className="uk-form-label uk-margin-small-left uk-margin-small-right">
      {label}
    </label>
  );

  const handleChecked = e => {
    if (e.target.checked !== _checked) {
      _setChecked(e.target.checked);
      onChange(e);
    }
  };

  return (
    <>
      {label && labelAlign === "top" && Label}
      <Container className="uk-form-controls">
        {label && labelAlign === "left" && Label}
        <input
          className={cls}
          type="checkbox"
          checked={_checked}
          onChange={handleChecked}
        />
        {label && labelAlign === "right" && Label}
      </Container>
      {label && labelAlign === "bottom" && Label}
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  labelAlign: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  label: null,
  checked: false,
  labelAlign: "top",
  onChange: () => {}
};

export default Checkbox;
