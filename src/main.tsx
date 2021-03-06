import React from "react";
import { render } from "react-dom";
import SmoothScroll from "smoothscroll-polyfill";

import "tachyons/css/tachyons.min.css";
import "./style.css";
import App from "./App";

SmoothScroll.polyfill();
render(<App />, document.querySelector("#app"));
