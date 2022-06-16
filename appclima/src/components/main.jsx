import React from "react";
import "./main.scss";
import { FaSearch } from "react-icons/fa";

const Main = ({ Busqueda }) => {
  return (
    <div>
      <div className="backgroundmain">
        <div className="busqueda">
          <div className="busquedaizq">
            <form action="">
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
