import React, { useRef, useEffect, useState } from "react";
import "./Work.css";

function Work(props) {
  return (
    <div className="WorkContainer">
      <div className="WorkInformation">
        <h2 style={{ position: "absolute", top: "10%", color: "white" }}>
          Our Work
          <br></br>
          <p style={{ fontSize: "0.6em", fontWeight: "100" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </h2>
      </div>
      <div className="CustomersContainer">
        <div class="card">
          <img src="Mountain.jpg" style={{ width: "100%" }}></img>
          <div class="container">
            <h4>
              <b>Customer 1</b>
            </h4>
            <p>Trade</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div class="card">
          <img src="Mountain.jpg" style={{ width: "100%" }}></img>
          <div class="container">
            <h4>
              <b>Customer 2</b>
            </h4>
            <p>Trade</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div class="card">
          <img src="Mountain.jpg" style={{ width: "100%" }}></img>
          <div class="container">
            <h4>
              <b>Customer 3</b>
            </h4>
            <p>Trade</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Work;
