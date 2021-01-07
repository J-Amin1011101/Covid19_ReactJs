import React from "react";
import "../App.css";
import { FaGithubAlt } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa" ;
import {FaFacebookF} from "react-icons/fa" ;
import {FaFacebook} from "react-icons/fa" ;
import Dp from "../img/21.jpg"

function About() {
  return (
    <div
      style=
      {
        {
          
        backgroundColor: "grey",
        textAlign: "center",
      }
    }
    >
      <br />
      <h2>About</h2>
      <br />
      <a href="https://www.facebook.com/jawad.amin.35/" target="_blank">
       
       <h1><FaFacebook/>ollow me</h1>
        <img
          height="50"
          src="https://scontent.fdac83-1.fna.fbcdn.net/v/t1.0-9/137254995_10208190417273383_4329521233332263464_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=gfnlPmSMlbEAX9ybfEm&_nc_ht=scontent.fdac83-1.fna&oh=7e54aef5d3749c0182dbf673cdf9fbc7&oe=601E6BD5"
          border="0"
          
        />
      </a>
      <br />
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          color: "black",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>Maker of this website?</h4>
        <div style={{ fontSize: "20px" }}>
          This site is created by Jawad Amin. A newcomer to the Web-Development Industry of Bangladesh.
        </div>
        <br />
        <img src={Dp} style={{ height: 300 }} />
      
        <h4>How to get in touch with me?</h4>
        <div style={{ fontSize: "20px" }}>
          You can contact me via linked
          <a href= "https://www.linkedin.com/in/jawad-amin-a45a501b9/" target="_blank">
          <FaLinkedinIn/>  
          </a>
          .
        </div>
        <br />
        <h4>To know more about my projects- </h4>
        <div style={{ fontSize: "20px" }}>
          Click{" "}
          <a
            href="https://github.com/J-Amin1011101"
            target="_blank"
          >
            <FaGithubAlt/>
          </a>{" "}
          will redirect you to my Github account.
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
