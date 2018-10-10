import React from "react";

const DisplaySimpson = ({ simpson }) => {
  return (
    <div className="DisplaySimpson">
      <img src={simpson.image} alt="picture" />
      <ul>
        <li>Name : {simpson.character}</li>
        <li>Quote : {simpson.quote}</li>
        <li>Character Direction : {simpson.characterDirection}</li>
      </ul>
    </div>
  );
};

export default DisplaySimpson;
