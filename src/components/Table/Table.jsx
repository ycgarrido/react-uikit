import React from "react";
import useStyles from "../../helpers/useStyles";
import Container from "../Container";
import Advanced from "./atoms/Advanced";
import Body from "./atoms/Body";
import Cell from "./atoms/Cell";
import Column from "./atoms/Column";
import Head from "./atoms/Head";
import Row from "./atoms/Row";
import Remote from "./atoms/Remote";

const Table = ({ children, ...props }) => {
  const cls = `uk-table uk-border uk-table-hover uk-table-divider uk-table-small ${useStyles(
    props
  )}`;
  return (
    <Container className="uk-table-wrapper">
      <table className={cls}>{children}</table>
    </Container>
  );
};

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Column = Column;
Table.Cell = Cell;
Table.Advanced = Advanced;
Table.Remote = Remote;

export default Table;
