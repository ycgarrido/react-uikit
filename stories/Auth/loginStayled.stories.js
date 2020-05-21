import React from "react";
import {
  withKnobs,
  select,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";
import Login from "../../src/components/auth/Login";
import Page from "../../src/layouts/Page";
import "../../src/sass/index.scss";
import logo from "../../images/logo.png";

export default { title: "Auth", decorators: [withKnobs] };

export const styledLogin = () => (
  <Page>
    <Login
      showTitle={boolean("showTitle", false)}
      showBrand={boolean("showBrand", true)}
      auth={{
        url: text("auth.url", "http://localhost:1337/auth/local"),
        method: text("auth.method", "POST")
      }}
      usernameSettings={{
        name: text("usernameSettings.name", "identifier"),
        style: object("usernameSettings.style", {
          marginBottom: "24px",
          "& input": {
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)"
          }
        })
      }}
      passwordSettings={{
        name: text("passwordSettings.name", "password"),
        style: object("passwordSettings.style", {
          marginBottom: "36px",
          "& input": {
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)"
          }
        })
      }}
      brandSettings={{
        src: logo
      }}
      cardSettings={{
        style: object("cardSettings.style", {
          boxShadow: "none",
          "& .uk-card-body": {
            padding: "36px 0px"
          }
        })
      }}
      acceptButtonSettings={{
        style: object("acceptButtonSettings.style", {
          borderRadius: "12px",
          "&:not(:disabled)": {
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.23)"
          }
        })
      }}
      onLogin={response => {
        alert(JSON.stringify(response));
      }}
    />
  </Page>
);
