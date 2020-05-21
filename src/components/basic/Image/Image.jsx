import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";

const Image = ({ alt, src, width, ...props }) => {
  let { className } = useStyles({ props });
  className = className || null;
  return <img src={src} className={className} alt={alt} width={width} />;
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
