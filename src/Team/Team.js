import React, { useRef, useEffect, useState } from "react";
import "./Team.css";

function Team(props) {
  return (
    <div className="TeamContainer">
      <h2 className="TeamTitle">Our Team</h2>
      <p className="TeamIntroduction">Meet the team - our office rats: </p>
      <div className="ImagesContainer">
        <img className="IslamImg" src="employeeM.jpg"></img>
        <img className="TayseerImg" src="employeeM.jpg"></img>
        <img className="EmanImg" src="employeeF.jpg"></img>
        <img className="ReemImg" src="employeeF.jpg"></img>
      </div>
      <div className="NamesPositionsContainer">
        <p className="IslamBio">
          Islam AlZatary<br></br>
          <p className="IslamOccupation">Web Designer</p>
        </p>
        <p className="TayseerBio">
          Tayseer Emam<br></br>
          <p className="TayseerOccupation">Support</p>
        </p>
        <p className="EmanBio">
          Eman Subhi<br></br>
          <p className="EmanOccupation">Boss Man</p>
        </p>
        <p className="ReemBio">
          Reem Yakoub<br></br>
          <p className="ReemOccupation">Fixer</p>
        </p>
      </div>
    </div>
  );
}
export default Team;
