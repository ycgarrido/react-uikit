import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Container from "../Container";
import useId from "../../hooks/useId";

const Checkbox = ({ checked, label, labelAlign, onChange, ...props }) => {
  const [_checked, _setChecked] = React.useState(checked);
  const id = useId();
  let cls = `uk-checkbox ${useStyles(props)}`;
  cls = cls || null;

  React.useEffect(() => {
    if (checked !== _checked) _setChecked(checked);
  }, [checked]);

  const Label = (
    <label
      htmlFor={`kamila-checkbox-${id}`}
      className="uk-form-label uk-margin-small-left uk-margin-small-right"
    >
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
          id={`kamila-checkbox-${id}`}
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
