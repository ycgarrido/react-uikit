import React from "react";
import PropTypes from "prop-types";
import { isBrowser } from "../helpers/browser";

import "uikit/dist/css/uikit.min.css";

const Main = ({ children }) => {
  const [loaded, setLoaded] = React.useState(
    typeof window !== "undefined" && !window.UIkit ? false : true
  );
  React.useEffect(() => {
    if (isBrowser()) {
      if (!window.UIkit) {
        const uikit = require("uikit");
        const icons = require("uikit/dist/js/uikit-icons.min");
        uikit.use(icons);
        window.UIkit = uikit;
      }
      setLoaded(true);
    }
  });
  return loaded ? children : null;
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

Main.defaultProps = {
  children: null
};

export default React.memo(Main);
