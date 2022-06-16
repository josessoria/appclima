import React,{useState} from "react";
import Main from "./main.jsx"
import Cards from "./cards.jsx";


function Api() {

  const [cities, setCities] = useState([])

  function Busqueda(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=5e9f8d51cd70185f32252910bf3b5566&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main !== undefined) {
          const ciudad = {
            temperatura: Math.round(data.main.temp),
            nombre: data.name,
            tempmax: Math.round(data.main.temp_max),
            tempmin: Math.round(data.main.temp_min),
            humedad: data.main.humidity,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            pais: data.sys.country,
          };
          setCities(ciudad)
        } else {
          alert("mi ray no se encontro tu city");
        }
      });
  }
  
  return <div>
    <Main Busqueda={Busqueda}></Main>
    <Cards cities={cities}></Cards>
    {console.log(cities)}

    
  </div>;
}

export default Api;
