import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Container from "../../layout/Container";
import Advanced from "./atoms/Advanced";
import Body from "./atoms/Body";
import Cell from "./atoms/Cell";
import Column from "./atoms/Column";
import Head from "./atoms/Head";
import Row from "./atoms/Row";
import Remote from "./atoms/Remote";

const Table = ({ children, containerSettings, ...props }) => {
  let { className } = useStyles({ props });
  className += ` uk-table uk-border uk-table-hover uk-table-divider uk-table-small`;
  return (
    <Container {...containerSettings}>
      <table className={className}>{children}</table>
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

Table.propTypes = {
  containerSettings: PropTypes.objectOf(PropTypes.any)
};

Table.defaultProps = {
  containerSettings: {
    className: "uk-table-wrapper",
    style: {
      display: "flex"
    }
  }
};

export default Table;
