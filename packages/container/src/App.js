import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import "./MuiClassNameSetup";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

export default () => {
  return (
    <BrowserRouter>
      <StyledEngineProvider>
        <div>
          <Header />
          <MarketingApp />
          <AuthApp />
        </div>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};
