import React from "react";
import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import Button from "../../src/components/basic/Button";
import Page from "../../src/layouts/Page";
import "../../src/sass/index.scss";

export default { title: "Button", decorators: [withKnobs] };

export const basic = () => (
  <Page>
    <Button
      className={text("className", "")}
      color={select(
        "color",
        {
          primary: "primary",
          default: "default",
          secondary: "secondary",
          danger: "danger",
          text: "text",
          link: "link"
        },
        "default"
      )}
      disabled={boolean("disabled", false)}
      icon={text("icon", "")}
      iconAlign={select("iconAlign", { left: "left", right: "right" }, "left")}
      iconRatio={number("iconRatio", 0.7)}
      size={select(
        "size",
        {
          small: "small",
          medium: "medium",
          large: "large"
        },
        "medium"
      )}
      tooltip={text("tooltip", "Hello this is a button")}
    >
      Hello Button
    </Button>
  </Page>
);
