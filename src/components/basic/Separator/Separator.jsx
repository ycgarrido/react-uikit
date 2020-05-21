import React from "react";
import useStyles from "@kamila-lab/use-styles";

const Separator = props => {
  let { className } = `${useStyles({ props })}`;
  className = className || null;
  return <hr className={className} />;
};

export default Separator;
