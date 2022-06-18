import React from "react";
import "./main.scss";
import { FaSearch } from "react-icons/fa";

const Main = ({ Busqueda}) => {
  let evitaPrevent=(e)=>{
    e.preventDefault()
  }

  window.addEventListener("keydown", (event) => {
    let tecla=event.key
    if(tecla==="Enter"){
      Busqueda(document.getElementById("value").value)
    }
  })

  
  return (
    <div>
      <div className="backgroundmain">
        <div className="busqueda">
          <div className="busquedaizq">
            <form onSubmit={evitaPrevent}>
              <FaSearch className="icon" />
              <input
                type="text"
                className="input"
                id="value"
                placeholder="Buscar"
              />
              <input
                className="equis"
                type="reset"
                value="enviar"
                onClick={() => Busqueda(document.getElementById("value").value)}
              />
            </form>
          </div>
          <div className="busquedader"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
