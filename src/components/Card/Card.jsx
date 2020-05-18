import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Container from "../Container";
import Loader from "../Loader";

const Card = ({ color, children, loading, ...props }) => {
  let { className } = useStyles({ props });
  className = className ? `uk-card ${className}` : "uk-card";
  if (color) className += ` uk-card-${color}`;
  return (
    <Container className={className}>
      {loading && <Loader />}
      {children}
    </Container>
  );
};

Card.Header = ({ children, ...props }) => {
  let { className } = useStyles({ props });
  className = className ? `uk-card-header ${className}` : "uk-card-header";
  return <div className={className}>{children}</div>;
};

Card.Body = ({ children, ...props }) => {
  let { className } = useStyles({ props });
  className = className ? `uk-card-body ${className}` : "uk-card-body";
  return <div className={className}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  color: PropTypes.oneOf(["primary", "default", "secondary"]),
  loading: PropTypes.bool
};

Card.defaultProps = {
  children: null,
  color: "default",
  loading: false
};

export default Card;
