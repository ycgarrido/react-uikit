import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Card = ({ color, children, header, ...props }) => {
  let cls = useStyles(props);
  if (color) cls += ` uk-card uk-card-${color}`;
  cls = cls || null;
  return (
    <div className={cls}>
      {header && <Card.Header>{header}</Card.Header>}
      {children && <Card.Body>{children}</Card.Body>}
    </div>
  );
};

Card.Header = ({ children }) => (
  <div className="uk-card-header">{children}</div>
);
Card.Body = ({ children }) => <div className="uk-card-body">{children}</div>;

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
  ])
};

Card.defaultProps = {
  children: null,
  color: "default",
  header: null
};

export default Card;
