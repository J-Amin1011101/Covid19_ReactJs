import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {FaFacebookF} from "react-icons/fa"
import {FaAmilia} from "react-icons/fa" ;
import {GiFlexibleLamp} from "react-icons/gi" ;
function Nav() {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "50px" }}><FaAmilia/><GiFlexibleLamp/>🌏🌏<FaFacebookF/></div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "red",
            textDecoration: "none",
            marginTop: "20px",
            marginRight: "40px",
          }}
          to="/symptom"
        >
          <li>Symptom</li>
        </Link>
        <Link
          style={{
            color: "green",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/about"
        >
        
        
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
