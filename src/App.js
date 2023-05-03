import './App.scss';
import React from "react";
import RickMorty from "./components/RickMorty";
import Egamers from "./components/Egamers";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
      <Link to="/rick-morty" className="navbar-brand text-uppercase">API Pública - Rick and Morty</Link> <br/>
      <Link to="/" className="navbar-brand text-uppercase">Home</Link> <br/>
      <Link to="/egamers" className="navbar-brand text-uppercase">eGamers</Link> <br/>
      </div>
      </nav>
      <hr/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rick-morty" element={<RickMorty />} />
        <Route path="/egamers" element={<Egamers />} />
      </Routes>
      </>
    </React.Fragment>
  );
}

export default App;
