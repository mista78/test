import React,{Fragment,useState} from "react";
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

const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={routeProps => (
    <Fragment>
      <Component>
        {routeProps = {...routeProps}}
      </Component>
    </Fragment>
  )} />
)

function App() {
  const [streamData, setStreamData] = useState(100);
  return (
    <Fragment>
      
      <Router>
      <Header data={streamData} />
        <div className="App container-fluid">``

          <Route exact path="/" component={Home} />
          <Route path="/game" component={Games} />
          <Route path="/top-streams" component={Stream} />
          <Route exact path="/stream/:id" component={GameStreams} />
        </div>
        <Route path="/views/:id" render={props => <Home {...props} test={streamData} setTest={setStreamData} />}/>
      </Router>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
