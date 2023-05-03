import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import Pagination from "./Pagination";

function RickMorty () {
  // guardo todos los personajes en el estado 'characters' y se lo pasamos
  // al componente
  const [characters, setCharacters] = useState([]); //setCharacters es la funcion que modifica el estado
  //creo otro estado vacio
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const totalCharacters= 0;
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json()) //nos regresa una promesa
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
        totalCharacters = data.info.count;
      })
      .catch((error) => console.log(error)); //si surge algun error
  };

  //creo una funcion q va a llamar a la API pero con la nueva url
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    // <> para evitar el error coloco un fragmento vacio
    // dentro de la propiedad 'characters' recibe el array de la linea 9
    // con todos los personajes q obtuvimos de API
    <>
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    //</>
  )
}

export default RickMorty;