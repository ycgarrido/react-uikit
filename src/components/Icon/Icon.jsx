import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Icon = ({ name, ratio, onClick, ...props }) => {
  let cls = useStyles(props);
  cls = cls || null;
  let data = `icon: ${name}`;
  if (ratio) data += `;ratio:${ratio}`;
  return <span className={cls} data-uk-icon={data} onClick={onClick} />;
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
