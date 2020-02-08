import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Counters
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
