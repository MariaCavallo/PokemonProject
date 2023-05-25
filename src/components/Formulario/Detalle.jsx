/**
 * ## Componente Detalle
 * En este componente se muestran los datos del entrenador y pokemon ingresados en el formulario.
 * 
 * Este componente utiliza FormContext para obtener los datos del formulario.
 * @example
 * <Detalle />
 * @module Detalle
*/

import { useContext, useEffect } from "react";
import { FormContext, resetForm } from "../../context/ContextoFormulario";
import styles from "./Detalle.module.css"
import { useNavigate } from "react-router-dom";
import { useMutation } from 'react-query';

const Detalle = () => {

    const { state, dispatch } = useContext(FormContext)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        dispatch(resetForm())
        navigate("/")
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        });  
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error al enviar el formulario")
        }
    }

    const { data, isError, isSucces } = useMutation(handleSubmit);
    
    useEffect(() => {
        if (isSucces) {
            alert(`Formulario enviado correctamente, id ${data ? data?.id : ""}`);
        } else if (isError) {
            alert("Error al eniviar el formulario. Por favor intente nuevamente!")
        }
    }, [isSucces, data, isError]);

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
                        <p>Altura: <i>{state.pokemon.altura}</i></p>
                        <p>Edad: <i>{state.pokemon.edad}</i></p>
                    </div>
                </section>
                <button
                    className="button primary-button"
                    onClick={handleSubmit}
                >
                    Enviar Solicitud
                </button>
            </div>
        </div>
    );
};

export default Detalle;
