import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "swiper/css/bundle";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    fab,
    faGithub,
    faJs,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEllipsis,
    faBorderAll,
    faGem,
    faR,
    faAngleLeft,
    faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

library.add(
    fab,
    faEllipsis,
    faBorderAll,
    faGithub,
    faJs,
    faDribbble,
    faGem,
    faAngleLeft,
    faAngleDown
);
