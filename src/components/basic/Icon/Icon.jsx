import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Icon = ({ name, ratio, onClick, ...props }) => {
  let { className } = useStyles({ props });
  let data = `icon: ${name}`;
  if (ratio) data += `;ratio:${ratio}`;
  return <span className={className} data-uk-icon={data} onClick={onClick} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  ratio: PropTypes.number
};

Icon.defaultProps = {
  className: null,
  onClick: () => {},
  ratio: 0.7
};

export default Icon;
