import React, { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import "./MuiClassNameSetup";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default ({ basename, location, history }) => {
  const [isolationLocation, setIsolationLocation] = useState(history.location);
  if (location === undefined) {
    history.listen((historyParams) =>
      setIsolationLocation(historyParams.location)
    );
  }
  return (
    <div>
      <StyledEngineProvider>
        <Router
          basename={basename}
          location={location || isolationLocation}
          navigator={history}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={() => <h1>Wrong request!</h1>} />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </div>
  );
};
