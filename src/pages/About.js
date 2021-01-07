import React from "react";
import "../App.css";
import { FaGithubAlt } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa" ;
import {FaFacebookF} from "react-icons/fa" ;
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
       <li>Details about me can be found in my </li> 
       <h1><FaFacebookF/></h1>
        <img
          height="50"
          src="https://scontent.fdac83-1.fna.fbcdn.net/v/t1.0-9/91340144_2937288722981582_480469371404156928_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=7s6Ss7IatM0AX-OPa7-&_nc_ht=scontent.fdac83-1.fna&oh=e0ab3b5cb9ce674f0093241e8e76735e&oe=601B54A8"
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
