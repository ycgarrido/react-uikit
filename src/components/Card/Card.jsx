import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";
import { Container, Spinner } from "../";

const Card = ({ color, children, header, loading, ...props }) => {
  let cls = useStyles(props);
  if (color) cls += ` uk-card uk-card-${color}`;
  cls = cls || null;
  return (
    <Container className={cls}>
      {loading && <Card.Loader />}
      {header && <Card.Header>{header}</Card.Header>}
      {children && <Card.Body>{children}</Card.Body>}
    </Container>
  );
};

Card.Header = ({ children }) => (
  <div className="uk-card-header">{children}</div>
);
Card.Body = ({ children }) => <div className="uk-card-body">{children}</div>;

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
    PropTypes.node
  ]),
  color: PropTypes.oneOf(["primary", "default", "secondary"]),
  header: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  loading: PropTypes.bool
};

Card.defaultProps = {
  children: null,
  color: "default",
  header: null,
  loading: false
};

export default Card;
