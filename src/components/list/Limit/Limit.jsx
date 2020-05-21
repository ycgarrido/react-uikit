import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Select from "../../basic/Select";

const options = [
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "100", value: 100 }
];

const Limit = ({ onChange, defaultValue, ...props }) => {
  let { className } = `${useStyles({ props })}`;
  className = className || null;
  return (
    <Select
      className={className}
      options={options}
      onChange={e => onChange({ limit: parseInt(e.target.value) })}
      defaultValue={defaultValue}
    />
  );
};

Limit.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.number
};

Limit.defaultProps = {
  onChange: () => {},
  defaultValue: null
};

export default Limit;
