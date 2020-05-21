import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import findInputs from "./helpers/findInputs";
import useValidChildren from "./hooks/useValidChildren";
import useFormValid from "./hooks/useFormValid";
import Loader from "../../basic/Loader";

class Form extends React.Component {
  state = {
    children: null
  };

  componentDidMount = () => {
    this.setChildren();
  };

  componentDidUpdate = prevProps => {
    this.onUpdate(prevProps);
  };

  onUpdate = prevProps => {
    const { children } = this.props;
    if (children !== prevProps.children) this.setChildren();
  };

  setChildren = () => {
    const { children, onValid } = this.props;
    const validate = findInputs(children);
    if (validate.length === 0) onValid({ valid: true });
    const handleValid = useFormValid({ onValid, validate });
    this.setState({
      children: useValidChildren({ children, handleValid })
    });
  };

  render = () => {
    const { layout, id, loading } = this.props;
    const { children } = this.state;
    let { className } = useStyles({ props: this.props });
    className = className
      ? `${className} uk-position-relative`
      : `uk-position-relative`;
    if (layout) className += ` uk-form-${layout}`;

    return (
      <form id={id} className={className}>
        {loading && <Loader />}
        {children}
      </form>
    );
  };
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  id: PropTypes.string,
  layout: PropTypes.oneOf([null, "stacked", "horizontal", "label", "controls"]),
  loading: PropTypes.bool,
  onValid: PropTypes.func
};

Form.defaultProps = {
  children: null,
  id: null,
  layout: null,
  loading: false,
  onValid: () => {}
};

export default Form;
