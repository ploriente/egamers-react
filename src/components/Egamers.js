import React, { useEffect, useState } from "react";
import Juegos from "./Juegos";

function Egamers() {
  //guardo todos los personajes en el estado 'characters' y se lo pasamos
  //al componente
  const [juegos, setJuegos] = useState([]); //setCharacters es la funcion que modifica el estado
  //creo otro estado vacio

  const initialUrl = "http://localhost:3000/api/products";

  const fetchJuegos = (url) => {
    fetch(url)
      .then((response) => response.json()) //nos regresa una promesa
      .then((data) => {
        console.log(data);
        setJuegos(data.data);
      })
      .catch((error) => console.log(error)); //si surge algun error
  };

  //creo una funcion q va a llamar a la API pero con la nueva url

  useEffect(() => {
    fetchJuegos(initialUrl);
  }, []);

  return <Juegos juegos={juegos} />;
}

export default Egamers;
