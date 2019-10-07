import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Input from "../Input";

const Search = ({ onChange, ...props }) => {
  let cls = `uk-search uk-search-default ${useStyles(props)}`;
  return (
    <Input
      type="search"
      placeholder="Search..."
      icon="search"
      className={cls}
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
