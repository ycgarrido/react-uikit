import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Container from "../Container";
import Loader from "../Loader";

const Card = ({ color, children, loading, ...props }) => {
  let cls = useStyles(props);
  if (color) cls += ` uk-card uk-card-${color}`;
  cls = cls || null;
  return (
    <Container className={cls}>
      {loading && <Loader />}
      {children}
    </Container>
  );
};

Card.Header = ({ children, ...props }) => {
  let cls = `uk-card-header ${useStyles(props)}`;
  return <div className={cls}>{children}</div>;
};

Card.Body = ({ children, ...props }) => {
  let cls = `uk-card-body ${useStyles(props)}`;
  return <div className={cls}>{children}</div>;
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
