import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Image = ({ alt, src, ...props }) => {
  let cls = `${useStyles(props)}`;
  cls = cls || null;
  return <img src={src} className={cls} alt={alt} />;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
