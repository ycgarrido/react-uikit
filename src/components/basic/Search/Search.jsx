import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Input from "../Input";

const Search = ({ onChange, ...props }) => {
  let { className } = useStyles({ props });
  className = className
    ? `uk-search uk-search-default ${className}`
    : "uk-search uk-search-default";
  return (
    <Input
      type="search"
      placeholder="Search..."
      icon="search"
      className={className}
      onChange={onChange}
    />
  );
};

Search.propTypes = {
  onChange: PropTypes.func
};

Search.defaultProps = {
  onChange: () => {}
};

export default React.memo(Search);
