import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import Dropdown from "../../src/components/basic/Dropdown";
import Grid from "../../src/components/layout/Grid";
import Container from "../../src/components/layout/Container";
import Page from "../../src/layouts/Page";
import "../../src/sass/index.scss";

export default { title: "Dropdown", decorators: [withKnobs] };

export const basic = () => (
  <Page>
    <Grid style={{ padding: "24px", margin: "0" }}>
      <Dropdown
        className={text("className", "")}
        label={text("label", "Dropdown")}
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
        icon={text("icon", "")}
        size={select(
          "size",
          {
            small: "small",
            medium: "medium",
            large: "large"
          },
          "medium"
        )}
      >
        <Container style={{ padding: "12px" }}>Hello Dropdown</Container>
      </Dropdown>
    </Grid>
  </Page>
);
