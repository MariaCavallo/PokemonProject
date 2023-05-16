import React, { useContext, useState } from "react";
import { FormContext, updateEntrenador, updatePokemon } from "../../context/ContextoFormulario";

/**
 * Componente para renderizar un contenedor con un texto descriptivo
 * @author MariaCavallo
 * @param {object} props 
 * @param {string} props.name // `name` y `id` del input
 * @param {string} props.label // texto descriptivo del input
 * @param {string} props.type //tipo del input por defecto `text`
 * @returns 
 */

const Input = ({ name, label, type = "text" }) => {

    const { dispatch } = useContext(FormContext)
    const [value, setValue] = useState("")

    const onChange = (e) => {
        setValue(e.target.value)
    };

    const onBlur = (e) => {
        e.preventDefault();
        if(e.target.name.includes("Pokemon")) {
            dispatch(updatePokemon(e.target.name, e.target.value))
        } else {
            dispatch(updateEntrenador(e.target.name, e.target.value))
        }
    };

    return (
        <div className="input-contenedor">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                id={name}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;
