import React from "react";
import PropTypes from "prop-types";
import List from "../List";
import Icon from "../Icon";
import Image from "../Image";
import Container from "../Container";
import Separator from "../Separator";

const Navigation = ({ items, ...props }) => {
  return (
    <div className="uk-tile uk-tile-secondary uk-padding-remove uk-navigation uk-height-100vh uk-overflow-auto">
      <Container shadow="xlarge">
        <a href="/_admin" className="uk-margin-small-right">
          <Image src="logo.png" alt="Kamila logo" />
        </a>
      </Container>
      <List className="uk-margin-remove-top">
        <Separator className="uk-margin-remove" />
        {items.map(item => (
          <a
            key={item.route}
            href={item.route}
            className="uk-link-reset"
            activeClassName="uk-active"
            partiallyActive
          >
            <List.Item>
              <Icon name="triangle-right" marginSmallRight />
              {item.label}
            </List.Item>
          </a>
        ))}
        <Separator className="uk-margin-remove" />
        <a
          href="/_admin/model"
          className="uk-link-reset"
          activeClassName="uk-active"
          partiallyActive
        >
          <List.Item>
            <Icon name="database" marginSmallRight />
            Model manager
          </List.Item>
        </a>
        <List.Item>
          <Icon name="unlock" marginSmallRight />
          Permissions
        </List.Item>
        <List.Item>
          <Icon name="settings" marginSmallRight />
          Settings
        </List.Item>
        <List.Item>
          <Icon name="users" marginSmallRight />
          Users
        </List.Item>
      </List>
    </div>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      route: PropTypes.string
    })
  )
};

Navigation.defaultProps = {
  items: []
};

export default Navigation;
