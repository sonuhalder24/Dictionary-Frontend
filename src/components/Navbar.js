import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button className="btn btn-info d-flex" type="submit">
          Login
        </button>
      </div>
    </nav>
  );
}

Navbar.PropTypes = { title: PropTypes.string };
