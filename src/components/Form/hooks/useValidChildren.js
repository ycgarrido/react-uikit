import React from "react";

const useValidChildren = ({ children, handleValid }) => {
  return findTree({ children, handleValid });
};

const findTree = ({ children, handleValid }) => {
  const result = [];
  const newChildren = Array.isArray(children) ? children : [children];
  newChildren.map((child, index) => {
    const type = child.type.name || child.type.type.name;
    const newProps = { ...child.props, key: child.props.key || index };
    if (type === "Input" && typeof handleValid === "function")
      newProps.onValid = handleValid;
    else if (child.props.children)
      newProps.children = findTree({
        children: child.props.children,
        handleValid
      });
    const newChild = React.createElement(child.type, newProps);

    result.push(newChild);
  });
  return result;
};

export default useValidChildren;
