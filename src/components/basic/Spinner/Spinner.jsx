import React from "react";
import useStyles from "@kamila-lab/use-styles";

const Spinner = props => {
  let { className } = useStyles({ props });
  className = className || null;
  return <div data-uk-spinner className={className} />;
};

export default Spinner;
