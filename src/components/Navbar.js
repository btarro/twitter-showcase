import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Twittery
        </a>
        <Search />
      </nav>
    </div>
  );
}

export default Navbar;
