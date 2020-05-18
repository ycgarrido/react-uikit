import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import Spinner from "../Spinner";

const Loader = ({ label, showSpinner }) => {
  return (
    <Container
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffffeb",
        zIndex: "1"
      }}
    >
      <Container
        style={{ marginTop: "auto", marginBottom: "auto", textAlign: "center" }}
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
