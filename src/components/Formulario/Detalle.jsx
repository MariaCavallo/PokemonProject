/**
 * ## Componente Detalle
 * En este componente se muestran los datos del entrenador y pokemon ingresados en el formulario.
 * 
 * Este componente utiliza FormContext para obtener los datos del formulario.
 * @example
 * <Detalle />
 * @module Detalle
*/

import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import styles from "./Detalle.module.css"
import { useMutation } from 'react-query';
import { postPokemonForm } from "../Services/api";

const Detalle = () => {

    const { state } = useContext(FormContext)

    const { isError, isLoading, mutate } = useMutation({
        mutationFn: (data) => postPokemonForm(data),
        onSuccess: async (data) => {
            alert("Formulario Enviado!")
            console.log(data);
        }
    });

    return (
        <div className={styles.formdetails}>
            <div className={styles.header}>
                <h3>Vista Previa de la Solicitud</h3>
            </div>
            <div className={styles.body}>
                <section className="datos-cliente">
                    <h4>Datos del Entrenador</h4>
                    <div className="fila">
                        <p>Nombre: <i>{state.entrenador.nombre}</i></p>
                        <p>Apellido: <i>{state.entrenador.apellido}</i></p>
                        <p>Email: <i>{state.entrenador.email}</i></p>
                    </div>
                </section>
                <section className="datos-cliente">
                    <h4>Datos del Pokémon</h4>
                    <div className="fila">
                        <p>Nombre: <i>{state.pokemon.nombre}</i></p>
                        <p>Tipo: <i>{state.pokemon.tipo}</i></p>
                        <p>Especie: <i>{state.pokemon.especie}</i></p>
                        <p>Altura: <i>{state.pokemon.altura}</i></p>
                        <p>Edad: <i>{state.pokemon.edad}</i></p>
                    </div>
                </section>
                <div>
                    {isError && (
                        <p>No hemos podido enviar el formulario, por favor intente nuevamente!</p>
                    )}
                    {isLoading && <p>Enviando Formulario</p>}
                </div>
                <button
                    className="button primary-button"
                    type="submit"
                    onClick={() => mutate(state)}
                    disabled={isLoading && isError}
                >
                    {isLoading ? "Enviando..." : "Enviar Solicitud"}
                </button>
            </div>
        </div>
    );
};

export default Detalle;
