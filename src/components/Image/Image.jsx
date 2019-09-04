import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { useStyles } from "../../helpers";

const Image = ({ alt, ...props }) => {
  let cls = `${useStyles(props)}`;
  cls = cls || null;
  return (
    <StaticQuery
      query={graphql`
        query($src: String) {
          file(relativePath: { eq: $src }) {
            publicURL
          }
        }
      `}
      render={data => (
        <img src={data.file.publicURL} className={cls} alt={alt} />
      )}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
