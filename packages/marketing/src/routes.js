import React from 'react';

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      { path: "*", element: () => <h1>Wrong request!</h1> },
    ],
  },
];

export default routes;
