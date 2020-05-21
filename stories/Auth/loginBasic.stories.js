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

export const login = () => (
  <Page>
    <Login
      showTitle={boolean("showTitle", false)}
      showBrand={boolean("showBrand", true)}
      auth={{
        url: text("auth.url", "http://localhost:1337/auth/local"),
        method: text("auth.method", "POST")
      }}
      usernameSettings={{
        name: text("usernameSettings.name", "identifier")
      }}
      passwordSettings={{
        name: text("passwordSettings.name", "password")
      }}
      brandSettings={{
        src: logo
      }}
      onLogin={response => {
        alert(JSON.stringify(response));
      }}
    />
  </Page>
);
