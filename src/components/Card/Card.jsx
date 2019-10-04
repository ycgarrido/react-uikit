import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Container, Spinner } from "../";

const Card = ({ color, children, loading, ...props }) => {
  let cls = useStyles(props);
  if (color) cls += ` uk-card uk-card-${color}`;
  cls = cls || null;
  return (
    <Container className={cls}>
      {loading && <Card.Loader />}
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

Card.Loader = () => (
  <Container
    width="1-1"
    height="1-1"
    flex="middle"
    className="uk-position-absolute uk-card-loading"
  >
    <Container width="1-1">
      <Spinner />
      <Container>Loading...</Container>
    </Container>
  </Container>
);

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
