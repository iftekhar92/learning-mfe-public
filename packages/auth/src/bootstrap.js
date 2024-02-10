import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./App";

let root = null;
// Mount function to start up the app
const mount = (el, { basename, location, onNavigate }) => {
  console.log('el =>>', el)
  if (!el) {
    root = null;
    return;
  }
  
  const history = location
    ? createMemoryHistory({
        initialEntries: [location.pathname],
      })
    : createBrowserHistory();
  if (onNavigate) {
    history.listen((historyParams) => onNavigate(historyParams.location));
  }
  root = root ? root : ReactDOM.createRoot(el);
  root.render(
    <App basename={basename} location={location} history={history} />
  );
};
// If we are in development and un isolation,
// Call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, {});
  }
}
// We are running through container
// And we should export the mount function
export { mount };
