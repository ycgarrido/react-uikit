import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Icon } from "../";

const Modal = {};

const propTypes = {
  id: PropTypes.string,
  header: PropTypes.string
};

const defaultProps = {
  header: null,
  id: null
};

Modal.Confirm = ({
  header,
  id,
  icon,
  message,
  onCancel,
  onAccept,
  closeWhenAccept
}) => {
  return (
    <div id={id} data-uk-modal>
      <Container className="uk-modal-dialog uk-modal-body">
        {header && <h4 className="uk-h4">{header}</h4>}
        <p>
          {icon && <Icon name={icon} />}
          {message}
        </p>
        <p className="uk-text-right">
          <Button className="uk-modal-close" size="small" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className={closeWhenAccept ? "uk-modal-close" : null}
            color="primary"
            size="small"
            marginSmallLeft
            onClick={onAccept}
          >
            Accept
          </Button>
        </p>
      </Container>
    </div>
  );
};

Modal.Confirm.propTypes = {
  ...propTypes,
  closeWhenAccept: PropTypes.bool,
  icon: PropTypes.string,
  message: PropTypes.string.isRequired,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
};

Modal.Confirm.defaultProps = {
  ...defaultProps,
  closeWhenAccept: false,
  icon: null,
  onAccept: () => {},
  onCancel: () => {}
};

Modal.Custom = ({ header, id, children }) => {
  return (
    <div id={id} data-uk-modal>
      <Container className="uk-modal-dialog uk-modal-body">
        {header && <h4 className="uk-h4">{header}</h4>}
        {children}
      </Container>
    </div>
  );
};

Modal.Custom.propTypes = {
  ...propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Modal.Custom.defaultProps = {
  ...defaultProps,
  children: null
};

export default Modal;
