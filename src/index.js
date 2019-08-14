import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Games from "./components/Games";
import Home from "./components/Home";
import Header from "./components/Header";
import Stream from "./components/Streams";
import GameStreams from "./components/GameStreams";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App container-fluid">
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Games} />
        <Route exact path="/top-streams" component={Stream} />
        <Route path="/game/:id" component={GameStreams} />
      </div>
      <Route path="/views/:id" component={Home} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
