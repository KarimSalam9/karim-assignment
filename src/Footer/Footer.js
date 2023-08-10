import React, { useRef, useEffect, useState } from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="FooterContainer">
      <div className="ContactSection">
        <div className="ContactUs">
          <h3
            style={{
              position: "absolute",
              color: "black",
              top: "10%",
              left: "2%",
              borderBottom: "5px solid #009688",
            }}
          >
            Contact Us:
          </h3>
          <br></br>
          <p
            style={{
              position: "absolute",
              top: "30%",
              color: "black",
              left: "2%",
              textAlign: "left",
            }}
          >
            <b>Address</b>
          </p>
          <br></br>
          <p
            style={{
              position: "absolute",
              top: "40%",
              color: "black",
              left: "2%",
              textAlign: "left",
            }}
          >
            Swing by for a cup of coffee, or whatever.
          </p>
          <br></br>
          <img className="LocationIcon" src="location.png"></img>
          <p
            style={{
              position: "absolute",
              left: "5%",
              top: "54.5%",
              color: "black",
            }}
          >
            Amman, Jordan
          </p>
          <br></br>
          <img className="PhoneIcon" src="phone.png"></img>
          <p
            style={{
              position: "absolute",
              left: "5%",
              top: "64%",
              color: "black",
            }}
          >
            +962 79 0000000
          </p>
          <br></br>
          <img className="MailIcon" src="mail.png"></img>
          <p
            style={{
              position: "absolute",
              left: "5%",
              top: "74%",
              color: "black",
            }}
          >
            test@test.com
          </p>
        </div>
        <div className="FormContainer">
          <form className="Form" action="/action_page.php">
            <input type="text" name="name" placeholder="Name"></input>

            <input type="text" name="email" placeholder="Email"></input>

            <input type="text" name="message" placeholder="Message"></input>

            <input type="checkbox" id="like" name="like" value="Like"></input>
            <label
              for="like"
              style={{
                position: "absolute",
                top: "80%",
                left: "6%",
                color: "black",
              }}
            >
              {" "}
              I Like it!
            </label>
            <br></br>

            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
      <div className="SocialMedia">
        <h2
          style={{
            position: "absolute",
            top: "5%",
            left: "48%",
            color: "white",
            fontWeight: "normal",
          }}
        >
          Follow Us
        </h2>
        <div className="SocialMediaIcons">
          <img
            className="Facebook"
            style={{ marginRight: "1%" }}
            src="facebook.png"
          ></img>
          <img
            className="Twitter"
            style={{ marginRight: "1%" }}
            src="twitter.png"
          ></img>
          <img
            className="Gmail"
            style={{ marginRight: "1%" }}
            src="google-plus.png"
          ></img>
          <img
            className="Instagram"
            style={{ marginRight: "1%" }}
            src="instagram.png"
          ></img>
          <img
            className="LinkedIn"
            style={{ marginRight: "1%" }}
            src="linkedIn.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Footer;
