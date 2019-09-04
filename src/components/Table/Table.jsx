import React from "react";
import { useStyles } from "../../helpers";
import { Container } from "../";
import { Advanced, Body, Cell, Column, Head, Row, Remote } from "./atoms";

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
