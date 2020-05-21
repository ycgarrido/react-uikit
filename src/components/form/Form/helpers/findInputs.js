import checkValidInput from "./checkValidInput";

const findInputs = children => {
  const names = [];
  findTree(children, names);
  return names;
};

const findTree = (children, names) => {
  const newChildren = Array.isArray(children) ? children : [children];
  newChildren.map(child => {
    const type = child.type.name || child.type.type.name;
    if (type === "Input") {
      if (!checkValidInput(child.props)) names.push(child.props.name);
    } else if (child.props.children) findTree(child.props.children, names);
  });
};

export default findInputs;
