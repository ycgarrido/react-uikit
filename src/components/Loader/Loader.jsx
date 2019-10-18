import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import Spinner from "../Spinner";

const Loader = ({ label, showSpinner }) => {
  return (
    <Container
      style-position="absolute"
      style-width="100%"
      style-height="100%"
      style-display="flex"
      style-flex-direction="column"
      style-background-color="#ffffffeb"
      style-z-index="1"
    >
      <Container
        style-margin-top="auto"
        style-margin-bottom="auto"
        style-text-align="center"
      >
        {showSpinner && <Spinner />}
        {label && <Container>{label}</Container>}
      </Container>
    </Container>
  );
};

Loader.propTypes = {
  label: PropTypes.string,
  showSpinner: PropTypes.bool
};

Loader.defaultProps = {
  label: "Loading...",
  showSpinner: true
};

export default Loader;
