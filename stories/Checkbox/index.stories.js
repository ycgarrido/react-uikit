import React from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import Checkbox from "../../src/components/basic/Checkbox";
import Page from "../../src/layouts/Page";
import "../../src/sass/index.scss";
import Grid from "../../src/components/layout/Grid";

export default { title: "Checkbox", decorators: [withKnobs] };

export const basic = () => (
  <Page>
    <Grid style={{ padding: "24px", margin: "0" }}>
      <Checkbox
        label={text("label", "")}
        className={text("className", "")}
        checked={boolean("checked", true)}
        labelAlign={select(
          "labelAlign",
          {
            top: "top",
            bottom: "bottom",
            left: "left",
            right: "right"
          },
          "top"
        )}
      >
        Hello Button
      </Checkbox>
    </Grid>
  </Page>
);
