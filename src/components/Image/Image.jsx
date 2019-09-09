import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Image = ({ alt, src, width, ...props }) => {
  let cls = `${useStyles(props)}`;
  cls = cls || null;
  return <img src={src} className={cls} alt={alt} width={width} />;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Image.defaultProps = {
  width: null
};

export default Image;
