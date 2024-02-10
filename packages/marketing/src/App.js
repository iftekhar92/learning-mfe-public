import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import routes from "./routes";
const Routes = () => useRoutes(routes);

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router>
          <Routes />
        </Router>
      </StylesProvider>
    </div>
  );
};
