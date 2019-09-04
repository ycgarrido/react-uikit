const sizes = ["small", "medium", "large", "xlarge"];

const useStyles = props => {
  let className = "";

  //Background
  if (props.background) className += `uk-background-${props.background} `;
  //Animations
  if (props.animation) className += `uk-animation-${props.animation} `;
  //Cursors
  if (props.cursor) className += `uk-cursor-${props.cursor} `;
  //Flex
  if (props.flex) className += `uk-flex uk-flex-${props.flex} `;
  //Float
  if (props.float) className += `uk-float-${props.float} `;
  //Overflow
  if (props.overflow) className += `uk-overflow-${props.overflow} `;
  //Margin
  className += margin(props);
  sizes.forEach(size => {
    className += margin(props, size);
  });
  //Padding
  if (props.padding === true) className += `uk-padding `;
  else if (props.padding) className += `uk-padding-${props.padding} `;
  //Shadow
  if (props.shadow) className += `uk-box-shadow-${props.shadow} `;
  //Text align
  if (props.textAlign) className += `uk-text-${props.textAlign} `;
  //Position
  if (props.position) className += `uk-position-${props.position} `;
  //Height
  if (props.height) className += `uk-height-${props.height} `;
  //Width
  if (props.width) className += `uk-width-${props.width} `;
  //Height
  if (props.height) className += `uk-height-${props.height} `;
  //Child width
  if (props.childWidth) className += `uk-child-width-${props.childWidth} `;
  if (props.childSmallWidth)
    className += `uk-child-width-${props.childSmallWidth}@s `;
  if (props.childMediumWidth)
    className += `uk-child-width-${props.childMediumWidth}@m `;
  if (props.childLargeWidth)
    className += `uk-child-width-${props.childLargeWidth}@l `;
  // Classname
  if (props.className) className += `${props.className} `;

  return className.trim();
};

const margin = (props, size = "") => {
  let className = "";
  const sizeValue = size ? `-${size}` : "";
  const sizeProp = size ? `${size[0].toUpperCase()}${size.substring(1)}` : "";
  //Margin
  if (props[`margin${sizeProp}`]) className += `uk-margin${sizeValue} `;
  if (props[`margin${sizeProp}Top`]) className += `uk-margin${sizeValue}-top `;
  if (props[`margin${sizeProp}Bottom`])
    className += `uk-margin${sizeValue}-bottom `;
  if (props[`margin${sizeProp}Left`])
    className += `uk-margin${sizeValue}-left `;
  if (props[`margin${sizeProp}Right`])
    className += `uk-margin${sizeValue}-right `;
  if (props[`margin${sizeProp}Right`])
    className += `uk-margin${sizeValue}-right `;
  return className;
};

export default useStyles;
