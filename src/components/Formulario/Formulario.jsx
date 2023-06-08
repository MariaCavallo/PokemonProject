/**
 * ## Componente Formulario
 * En este componente el usuario puede ingresar tanto sus datos como los de su Pokemon para poder realizar una solicitud.
 * 
 * Utiliza FormContext para guardar los datos en un estado global.
 * @module Formulario
 * @example
 * <Formulario />
 */

import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import styles from "./Formulario.module.css"
import SelectType from "../Select/Select";
import SelectSpecies from "../Select/SelectSpecies"

const Formulario = () => {

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>
          <img src={pokebola} alt="pokebola" />
          <h1>Centro Pokemon</h1>
        </Link>
        <Link className={styles.volver} to="/">
          Home
        </Link>
        <Link target="_blank" className={styles.link} to={"https://pokemon-center-docs.vercel.app/"}>
          Documentación
        </Link>
      </header>
      <section className={styles.formcontainer}>
        <h2>Solicitud de atención</h2>
        <p>
          ¡Bienvenido! Rellena los campos para que podamos <br />encargarnos de tu querido compañero de viaje
        </p>
        <form className={styles.formbody}>
          <div className={styles.inputs}>
            <div className={styles.group}>
              <h4>
                <img src={entrenador} alt="entrenador" />
                <span>Entrenador</span>
              </h4>
              <Input name="nombre" label="Nombre" />
              <Input name="apellido" label="Apellido" />
              <Input  name="email" label="Email" type="email" />
            </div>
            <div className={styles.group}>
              <h4>
                <img src={pikachu} alt="pikachu" />
                <span>Pokemon</span>
              </h4>
              <Input name="nombrePokemon" label="Nombre" />
              <SelectType name="tipoPokemon" label="Tipo" />
              <SelectSpecies name="especiePokemon" label="Especie" />
              <Input name="alturaPokemon" label="Altura" />
              <Input name="edadPokemon" label="Edad" />
            </div>
          </div>
          <Detalle />
        </form>
      </section>
    </>
  );
};

export default Formulario;
