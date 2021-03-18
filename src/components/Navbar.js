import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          Twittery
        </a>
        <a className="navbar-link" href="/adopt">
          Adopt-A-Tweet
        </a>
        <a className="navbar-link" href="/search"></a>

        <Search />
      </nav>
    </div>
  );
}

export default Navbar;
