import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import findInputs from "./helpers/findInputs";
import useValidChildren from "./hooks/useValidChildren";

const Form = ({ children, layout, onValid, ...props }) => {
  let cls = useStyles(props);
  if (layout) cls += ` uk-form-${layout}`;
  cls = cls || null;
  const validate = findInputs(children);
  const child = useValidChildren({ children, validate, onValid });
  return <form className={cls}>{child}</form>;
};

Form.propTypes = {
  layout: PropTypes.oneOf([null, "stacked", "horizontal", "label", "controls"]),
  onValid: PropTypes.func
};

Form.defaultProps = {
  layout: null,
  onValid: () => {}
};

export default React.memo(Form, () => true);
