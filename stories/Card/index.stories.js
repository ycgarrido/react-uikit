import React from "react";
import { withKnobs, select, boolean, object } from "@storybook/addon-knobs";
import Card from "../../src/components/Card";
import Image from "../../src/components/Image";
import Page from "../../src/layouts/Page";
import "../../src/sass/index.scss";

export default { title: "Card", decorators: [withKnobs] };

export const basic = () => (
  <Page>
    <Card
      color={select(
        "color",
        {
          primary: "primary",
          default: "default",
          secondary: "secondary"
        },
        "default"
      )}
      loading={boolean("loading", false)}
      style={object("style", { padding: "24px", margin: "60px" })}
    >
      Hello Card
    </Card>
  </Page>
);

export const headerAndBody = () => (
  <Page>
    <Card
      color={select(
        "color",
        {
          primary: "primary",
          default: "default",
          secondary: "secondary"
        },
        "default"
      )}
      loading={boolean("loading", false)}
      style={object("style", { margin: "60px" })}
    >
      <Card.Header>Card Title</Card.Header>
      <Card.Body>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Body>
    </Card>
  </Page>
);

export const image = () => (
  <Page>
    <Card loading={boolean("loading", false)} style={{ margin: "60px" }}>
      <Card.Header>Card Title</Card.Header>
      <Image src="https://images.freeimages.com/images/large-previews/941/the-beach-1404130.jpg" />
      <Card.Body>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Body>
    </Card>
  </Page>
);

export const action = () => (
  <Page>
    <Card
      loading={boolean("loading", false)}
      style={object("style", {
        margin: "60px",
        boxShadow: "none",
        cursor: "pointer",
        "&:hover": {
          outline: "solid 1px #5db7a5",
          outlineOffset: "2px"
        }
      })}
    >
      <Image src="https://images.freeimages.com/images/large-previews/941/the-beach-1404130.jpg" />
    </Card>
  </Page>
);
