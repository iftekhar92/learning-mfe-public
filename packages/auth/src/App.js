import React, { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import "./MuiClassNameSetup";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

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
            <Route path="/auth/signin" element={<Signin onSignIn={() => {}} />} />
            <Route path="/auth/signup" element={<Signup onSignIn={() => {}} />} />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </div>
  );
};
