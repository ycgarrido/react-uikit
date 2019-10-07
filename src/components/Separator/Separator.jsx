import React from "react";
import useStyles from "@kamila-lab/use-styles";

const Separator = props => {
  let cls = `${useStyles(props)}`;
  cls = cls || null;
  return <hr className={cls} />;
};

export default Separator;
