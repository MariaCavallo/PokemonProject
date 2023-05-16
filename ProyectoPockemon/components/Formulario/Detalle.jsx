import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Detalle = () => {

    const { state } = useContext(FormContext)

    return (
        <div className="detalle-formulario">
            <div className="encabezado">
                <h3>Vista Previa de la Solicitud</h3>
            </div>
            <section className="datos-cliente">
                <h4>Datos del Entrenador</h4>
                <div className="fila">
                    <p>Nombre: {state.entrenador.nombre}</p>
                    <p>Apellido: {state.entrenador.apellido}</p>
                    <p>Email: {state.entrenador.email}</p>
                </div>
            </section>
            <section className="datos-cliente">
                <h4>Datos del Pokémon</h4>
                <div className="fila">
                    <p>Nombre: {state.pokemon.nombre}</p>
                    <p>Tipo: {state.pokemon.tipo}</p>
                    <p>Elemento: {state.pokemon.elemento}</p>
                    <p>Altura: {state.pokemon.altura}</p>
                    <p>Edad: {state.pokemon.edad}</p>
                </div>
            </section>
            <button
                className="boton-enviar"
                onClick={() => alert("Solicitud enviada :)")}
            >
                Enviar Solicitud
            </button>
        </div>
    );
};

export default Detalle;
