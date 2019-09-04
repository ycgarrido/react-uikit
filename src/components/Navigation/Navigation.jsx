import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { List, Icon, Image, Container, Separator } from "..";

const Navigation = ({ items, ...props }) => {
  return (
    <div className="uk-tile uk-tile-secondary uk-padding-remove uk-navigation uk-height-100vh uk-overflow-auto">
      <Container shadow="xlarge">
        <Link to="/_admin" className="uk-margin-small-right">
          <Image src="logo.png" alt="Kamila logo" />
        </Link>
      </Container>
      <List className="uk-margin-remove-top">
        <Separator className="uk-margin-remove" />
        {items.map(item => (
          <Link
            key={item.route}
            to={item.route}
            className="uk-link-reset"
            activeClassName="uk-active"
            partiallyActive
          >
            <List.Item>
              <Icon name="triangle-right" marginSmallRight />
              {item.label}
            </List.Item>
          </Link>
        ))}
        <Separator className="uk-margin-remove" />
        <Link
          to="/_admin/model"
          className="uk-link-reset"
          activeClassName="uk-active"
          partiallyActive
        >
          <List.Item>
            <Icon name="database" marginSmallRight />
            Model manager
          </List.Item>
        </Link>
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
