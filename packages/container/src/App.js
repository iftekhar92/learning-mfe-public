import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import "./MuiClassNameSetup";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <StyledEngineProvider>
        <div>
          <Header />
          <MarketingApp />;
        </div>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};
