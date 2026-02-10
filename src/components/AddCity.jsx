import "../css/AddCity.css";
import { useState } from "react";

function AddCity({setSelectedCity}) {

  return (
    <header>
      <div className="input-container">
        <button onClick={() => setSelectedCity("Vitória")}>Vitória</button>
        <button onClick={() => setSelectedCity("Rio de Janeiro")}>Rio de Janeiro</button>
        <button onClick={() => setSelectedCity("São Paulo")}>São Paulo</button>
      </div>
    </header>
  );
}

export default AddCity;
