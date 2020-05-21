import React from "react";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";
import Table from "../../src/components/list/Table";
import Icon from "../../src/components/basic/Icon";
import Image from "../../src/components/basic/Image";
import Page from "../../src/layouts/Page";
import "../../src/sass/index.scss";

const data = [
  { _id: "1", first_name: "Hulda" },
  { _id: "2", first_name: "Mohammed" },
  { _id: "3", first_name: "Carol" },
  { _id: "4", first_name: "Jemima" },
  { _id: "5", first_name: "Ferrel" },
  { _id: "6", first_name: "Gaspard" }
];

export default { title: "Table", decorators: [withKnobs] };

export const advanced = () => (
  <Page>
    <Table.Advanced
      count={number("count", data.length)}
      limit={number("limit", 5)}
      loading={boolean("loading", false)}
      noDataLabel={text("noDataLabel", "No data to show.")}
      columns={[
        {
          ui: {
            index: "_id",
            label: "Id"
          },
          config: { type: "text" }
        },
        {
          ui: {
            index: "first_name",
            label: "First Name"
          },
          config: { type: "text" }
        }
      ]}
      data={data}
      onItemClick={({ item }) => {
        alert(`Clicked item: ${JSON.stringify(item)}`);
      }}
      onLimitChange={({ limit }) => {
        alert(`Limit changed: ${limit}`);
      }}
      onPageChange={({ page }) => {
        alert(`Page changed: ${page}`);
      }}
      onRemoveItem={item => {
        alert(`Removed item: ${JSON.stringify(item)}`);
      }}
      onSearch={({ value }) => {
        alert(`You are searching: ${value}`);
      }}
      onSelectionChange={({ selected }) => {
        alert(`Selected items: ${JSON.stringify(selected)}`);
      }}
      onSortChange={({ sort }) => {
        alert(`You will sorting by: ${JSON.stringify(sort)}`);
      }}
      onUpdate={({ _id, item, index }) => {
        alert(
          `Update id: ${_id}; index: ${index}; item: ${JSON.stringify(item)}`
        );
      }}
    ></Table.Advanced>
  </Page>
);
