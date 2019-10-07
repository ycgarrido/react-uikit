import React from "react";
import useStyles from "@kamila-lab/use-styles";

const Spinner = props => {
  let cls = useStyles(props);
  cls = cls || null;
  return <div data-uk-spinner className={cls} />;
};

export default Spinner;
