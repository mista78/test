import React from "react";
import { Link } from "react-router-dom";

function Header({data}) {
  return (
    <nav className="navbar fixed-top">
      <ul>
        <li className="nav-item nav-link">
          <Link to="/">Home</Link>
        </li>
         <li className="nav-item nav-link">
          <Link to="/game">Top Games</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/top-streams">Top Live Streams</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
