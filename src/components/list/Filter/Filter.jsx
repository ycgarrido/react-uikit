import React from "react";
import PropTypes from "prop-types";
import Container from "../../layout/Container";
import Card from "../../card/Card";
import List from "../List";
import Select from "../../basic/Select";
import Input from "../../basic/Input";
import Grid from "../../layout/Grid";
import Button from "../../basic/Button";
import Icon from "../../basic/Icon";
import useMapper from "../../../hooks/useMapper";

const operators = [
  ["eq", "Equals"],
  ["ne", "Not equals"],
  ["lt", "Less than"],
  ["lte", "Less than or equals"],
  ["gt", "Great than"],
  ["gte", "Great than or equals"],
  ["contains", "Contains"],
  ["ncontains", "Not contains"]
];

const findColOptions = ({ filters, columns }) => {
  return columns
    .filter(column => !filters[column.ui.index])
    .map(column => ({
      label: column.ui.label,
      value: column.ui.index
    }));
};

const addFilter = ({ setFilters, filters, columns }) => {
  const colsOptions = findColOptions({ filters, columns });
  if (colsOptions[0]) {
    const newFilter = { ...filters };
    newFilter[colsOptions[0].value] = "ppp";
    setFilters(newFilter);
  }
};

const removeFilter = ({ filter, setFilters, filters }) => {
  const newFilter = { ...filters };
  if (newFilter[filter]) {
    delete newFilter[filter];
    setFilters(newFilter);
  }
};

const Filter = ({ columns, onChange, onClose }) => {
  const colsOptions = useMapper(
    columns,
    ["${ui.label}=>label", "${ui.index}=>value"],
    ["ui", "config"]
  );
  const [filters, setFilters] = React.useState({ [colsOptions[0]]: "sdsss" });

  return (
    <Container position="absolute" width="1-1" className="uk-filter">
      <Card shadow="xlarge" animation="scale-up">
        {Object.keys(filters).length === 0 && (
          <>
            <Container flex="center">
              <Icon name="info" ratio={2} />
            </Container>
            <Container flex="center" marginSmallTop>
              There are not filters selected yet, pleace add your first
            </Container>
            <Container flex="center" marginSmallTop>
              <Button
                icon="plus"
                onClick={() => addFilter({ setFilters, filters, columns })}
              >
                Add new
              </Button>
            </Container>
          </>
        )}
        {Object.keys(filters).length > 0 && (
          <List useHover={false}>
            {Object.keys(filters).map(filter => (
              <List.Item key={filter}>
                <Grid>
                  <Container width="expand">
                    <Select width="1-1" options={colsOptions} />
                  </Container>
                  <Container width="expand">
                    <Select
                      width="1-1"
                      options={operators}
                      valueField="0"
                      labelField="1"
                    />
                  </Container>
                  <Container width="expand">
                    <Input width="1-1" placeholder="Enter a value" />
                  </Container>
                  <Container flex>
                    <Button
                      color="text"
                      icon="plus"
                      marginSmallRight
                      onClick={() =>
                        addFilter({ setFilters, filters, columns })
                      }
                    />
                    <Button
                      color="text"
                      icon="trash"
                      onClick={() =>
                        removeFilter({ filter, filters, setFilters })
                      }
                    />
                  </Container>
                </Grid>
              </List.Item>
            ))}
            <List.Item>
              <Container flex="right">
                <Button
                  size="small"
                  color="danger"
                  onClick={onClose}
                  marginSmallRight
                >
                  Close
                </Button>
                <Button size="small" color="primary" onClick={onChange}>
                  Apply
                </Button>
              </Container>
            </List.Item>
          </List>
        )}
      </Card>
    </Container>
  );
};

Filter.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      ui: PropTypes.shape({
        index: PropTypes.string,
        label: PropTypes.string
      }),
      config: PropTypes.objectOf(PropTypes.any)
    })
  ),
  onChange: PropTypes.func,
  onClose: PropTypes.func
};

Filter.defaultProps = {
  columns: [],
  onChange: () => {},
  onClose: () => {}
};

export default Filter;
