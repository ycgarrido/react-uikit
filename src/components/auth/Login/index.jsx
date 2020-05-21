import React from "react";
import PropTypes from "prop-types";
import Card from "../../card/Card";
import Input from "../../basic/Input";
import Button from "../../basic/Button";
import Image from "../../basic/Image";
import Container from "../../layout/Container";
import Form from "../../form/Form";
//import { handleLogin } from "../services/auth";
//import logo from "../src/images/logo-main-black.png";
import { request } from "../../../helpers/request";
import withProps from "../../../helpers/withProps";

const Login = ({
  cardSettings,
  brandSettings,
  showBrand,
  title,
  containerSettings,
  titleSettings,
  showTitle,
  usernameSettings,
  passwordSettings,
  auth,
  onLogin,
  onFail,
  acceptButtonSettings
}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);

  const handleValid = ({ valid }) => {
    if (valid !== isValid) setIsValid(valid);
  };

  const handleUsername = ({ value }) => {
    setUsername(value);
  };

  const handlePassword = ({ value }) => {
    setPassword(value);
  };

  const handleAccept = () => {
    setLoading(true);
    const config = {
      url: auth.url,
      method: auth.method,
      data: {
        [usernameSettings.name]: username,
        [passwordSettings.name]: password
      }
    };
    console.log(config);
    request(config)
      .then(response => {
        onLogin(response);
        setLoading(false);
      })
      .catch(error => {
        onFail();
        setLoading(false);
        setError(error.message);
      });
  };
  return (
    <Container {...containerSettings}>
      <Card {...cardSettings} loading={loading}>
        {(showBrand || showTitle) && (
          <Card.Header>
            {showBrand && <Image {...brandSettings} />}
            {showTitle && <Container {...titleSettings}>{title}</Container>}
          </Card.Header>
        )}
        <Card.Body>
          {error !== null && (
            <Container style-color="#f0506e">{error}</Container>
          )}
          <Form onValid={handleValid}>
            <Input
              {...usernameSettings}
              value={username}
              onChange={handleUsername}
              name="identifier"
              required
            />
            <Input
              {...passwordSettings}
              value={password}
              type="password"
              onChange={handlePassword}
              name="password"
              required
            />
          </Form>
          <Button
            color="primary"
            style-width="100%"
            {...acceptButtonSettings}
            onClick={handleAccept}
            disabled={!isValid}
          >
            Login
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

Login.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any),
  cardSettings: PropTypes.objectOf(PropTypes.any),
  containerSettings: PropTypes.objectOf(PropTypes.any),
  acceptButtonSettings: PropTypes.objectOf(PropTypes.any),
  showBrand: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  brandSettings: PropTypes.objectOf(PropTypes.any),
  titleSettings: PropTypes.objectOf(PropTypes.any),
  usernameSettings: PropTypes.objectOf(PropTypes.any),
  passwordSettings: PropTypes.objectOf(PropTypes.any),
  onLogin: PropTypes.func,
  onFail: PropTypes.func
};

Login.defaultProps = {
  auth: null,
  cardSettings: {
    style: {
      textAlign: "center",
      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      width: "350px"
    }
  },
  showBrand: false,
  showTitle: false,
  brandSettings: {},
  title: "Login",
  containerSettings: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }
  },
  titleSettings: {
    style: {
      marginTop: "12px",
      fontWeight: "bold"
    }
  },
  usernameSettings: {
    name: "username",
    style: {
      marginBottom: "12px",
      width: "100%"
    },
    icon: "user",
    placeholder: "Username"
  },
  passwordSettings: {
    name: "password",
    type: "password",
    icon: "lock",
    placeholder: "Password",
    style: {
      marginBottom: "12px",
      width: "100%"
    }
  },
  onLogin: () => {},
  onFail: () => {},
  acceptButtonSettings: {}
};

export default withProps(Login);
