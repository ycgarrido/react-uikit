import React from "react";
import { mergeDeep } from "./javascript";

function withProps(WrappedComponent) {
  const PropsContainer = props => {
    // Weird hack to guarantying having access to the default props
    // of the wrappedComponent
    const wrappedDefaults = Object.assign({}, WrappedComponent.defaultProps);
    const propsCopy = mergeDeep(wrappedDefaults, props);

    return <WrappedComponent {...propsCopy} />;
  };

  return PropsContainer;
}

export default withProps;
