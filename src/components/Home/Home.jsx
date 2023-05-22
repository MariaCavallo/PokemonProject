/**
 * ## Componente Home
 * Es el inicio del sitio.
 * 
 * Aquí se encuentran los links para acceder al formulario y la documentación. También contiene el listado de los integrantes.
 * @module Home
 * @example
 * <Home />
 */

import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";

const Home = () => {
    const integrantes = [
        "Ezequiel Melogno", 
        "Jazmín Maldonado", 
        "Daniela Fernanda Pipke", 
        "Pablo Alvarez", 
        "Damián Dellacqua", 
        "Matias Aplanalp", 
        "María Cavallo", 
        "Sergio Nicolás Guerrero", 
        "Fernanda Rodriguez", 
        "Barbara Perdomo", 
        "Ignacio Lopez"
    ]

  return (
    <header className="App-header">
      <img className="App-logo" alt="logo" src={pokebola} />
      <h1>Centro Pokemon de Ash</h1>
      <div className="home-buttons">
        <Link to="/formularioIngreso" className="button primary-button">
            Ingresar pokemon
        </Link>
        <a href="https://pokemon-center-docs.vercel.app/"
        target="_blank"
        className="button">Ver documentación</a>
      </div>
      <h4>Integrantes</h4>
      <div className="home-members">
        {integrantes.map(integrante => <p>{integrante}</p>)}
      </div>
    </header>
  );
};

export default Home;
