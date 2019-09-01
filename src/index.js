import React from "react";
import { render } from "react-dom";

import "semantic-ui-css/semantic.min.css";


//import GameCard from "./components/GameCard";
//import GamesList from "./components/GamesList.js";
import App from "./components/app.js";
//render(<GameCard/>, document.getElementById("root"));

//render(<GameCard game={games[1]} />, document.getElementById("root"));
//render(<GamesList games={games} />, document.getElementById("root"));
render(<App />, document.getElementById("root"));