import React from "react";
import { Icon } from "../../../components";

const usePreview = ({ type, value, id }) => {
  switch (type.toLowerCase()) {
    case "image:url":
      return (
        <>
          <img
            className="uk-cursor-zoom-in uk-border-circle uk-preserve-width"
            src={value}
            width="20"
            alt=""
          />
          <div data-uk-dropdown="mode: click;pos: left">
            <img className="uk-preserve-width" src={value} alt="" />
          </div>
        </>
      );
    case "array":
      return "[...]";
    case "array:tooltip":
      return (
        <span
          title={JSON.stringify(value, null, 4)}
          data-uk-tooltip="pos: left"
          className="uk-cursor-zoom-in"
        >
          {"[...]"}
        </span>
      );
    case "object":
      return "{...}";
    case "object:tooltip":
      return (
        <span
          title={JSON.stringify(value, null, 4)}
          data-uk-tooltip="pos: left"
          className="uk-cursor-zoom-in"
        >
          {"{...}"}
        </span>
      );
    case "boolean":
      if (value === true) return <Icon name="check" />;
      if (value === false) return <Icon name="close" />;
      return "";
    default:
      return value;
  }
};

export default usePreview;
