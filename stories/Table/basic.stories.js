import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Table from "../../src/components/list/Table";
import Icon from "../../src/components/basic/Icon";
import Image from "../../src/components/basic/Image";
import Page from "../../src/layouts/Page";
import "../../src/sass/index.scss";

import icon from "../../images/component.png";

export default { title: "Table", decorators: [withKnobs] };

export const basic = () => (
  <Page>
    <Table
      style={{
        margin: "60px"
      }}
    >
      <Table.Head>
        <Table.Row>
          <Table.Column>Name</Table.Column>
          <Table.Column>Active</Table.Column>
          <Table.Column>Device</Table.Column>
          <Table.Column>Icon</Table.Column>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Web Hero Component </Table.Cell>
          <Table.Cell>
            <Icon name="check" />
          </Table.Cell>
          <Table.Cell>
            <Icon name="desktop" />
          </Table.Cell>
          <Table.Cell>
            <Image src={icon} width="24" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Page>
);
