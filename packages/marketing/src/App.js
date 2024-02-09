import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import routes from "./routes";
const Routes = () => useRoutes(routes);

export default () => {
  return (
    <div>
      <StylesProvider>
        <Router>
          <Routes />
        </Router>
      </StylesProvider>
    </div>
  );
};
