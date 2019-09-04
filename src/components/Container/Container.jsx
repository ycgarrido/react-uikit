import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "../../helpers";

const Container = ({ children, id, heightMatch, ...props }) => {
  let cls = `uk-content ${useStyles(props)}`;
  cls = cls || null;
  return (
    <div data-uk-height-match={heightMatch} className={cls}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  heightMatch: PropTypes.string,
  id: PropTypes.string
};

Container.defaultProps = {
  children: null,
  className: null,
  heightMatch: null,
  id: null
};

export default Container;
