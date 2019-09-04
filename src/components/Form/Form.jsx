import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Form = ({ children, layout, ...props }) => {
  let cls = useStyles(props);
  if (layout) cls += ` uk-form-${layout}`;
  cls = cls || null;
  return <form className={cls}>{children}</form>;
};

Form.propTypes = {
  layout: PropTypes.oneOf([null, "stacked", "horizontal", "label", "controls"])
};

Form.defaultProps = {
  layout: null
};

export default Form;
