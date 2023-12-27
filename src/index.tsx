/* @refresh reload */
import { Router } from "@solidjs/router";
import { lazy } from "solid-js";
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (!root || !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "*404",
    component: lazy(() => import("./pages/NotFound")),
  },
];

render(() => <Router root={App}>{routes}</Router>, root);
