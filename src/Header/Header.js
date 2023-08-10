import React, { useRef, useEffect, useState } from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="HeaderContainer">
      <div className="NavBar">
        <img className="HomeImg" src="home.ico"></img>
        <button className="Logo">Logo</button>
        <button className="Team">Team</button>
        <button className="Work">Work</button>
        <button className="Price">Price</button>
        <button className="Contact">Contact</button>
        <select className="DropDown">
          <option value="DropDown">DropDown</option>
        </select>
        <img className="SearchImg" src="search.ico"></img>
      </div>
      <img className="DesertImg" src="desert.jpg"></img>
    </div>
  );
}
export default Header;
