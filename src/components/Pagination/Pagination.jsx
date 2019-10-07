import React from "react";
import PropTypes from "prop-types";
import useStyles from "@kamila-lab/use-styles";
import Button from "../Button";

const numbers = ({ page, onChange, loops }) => {
  const elements = [];

  for (let index = 0; index < loops; index++) {
    elements.push(
      <li key={index} className={page === index + 1 ? "uk-active" : null}>
        <Button
          color="text"
          style-height="100%"
          onClick={() =>
            onPageChange({ previousPage: page, nextPage: index + 1, onChange })
          }
        >
          {index + 1}
        </Button>
      </li>
    );
  }
  return elements;
};

const onPageChange = ({ previousPage, nextPage, onChange }) => {
  if (previousPage !== nextPage) onChange({ page: nextPage });
};

const Pagination = ({ count, page, limit, onChange, ...props }) => {
  let cls = `uk-pagination uk-border ${useStyles(props)}`;
  cls = cls || null;
  let loops = Number(count) && Number(limit) ? count / limit : 0;
  loops = loops % 101 !== 0 ? Math.floor(loops) + 1 : loops;
  return (
    <ul className={cls} data-uk-margin>
      <li className={page === 1 ? "uk-disabled" : null}>
        <Button
          color="text"
          style-height="100%"
          onClick={() =>
            onPageChange({
              previousPage: page,
              nextPage: page - 1,
              onChange
            })
          }
        >
          <span data-uk-pagination-previous />
        </Button>
      </li>
      {numbers({ count, page, limit, onChange, loops })}
      <li className={page === loops ? "uk-disabled" : null}>
        <Button
          color="text"
          style-height="100%"
          onClick={() =>
            onPageChange({ previousPage: page, nextPage: page + 1, onChange })
          }
        >
          <span data-uk-pagination-next />
        </Button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  limit: PropTypes.number,
  onChange: PropTypes.func,
  page: PropTypes.number
};

Pagination.defaultProps = {
  count: null,
  limit: 10,
  onChange: () => {},
  page: null
};

export default Pagination;
