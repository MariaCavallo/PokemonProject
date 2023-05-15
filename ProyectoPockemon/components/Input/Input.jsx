import React, { useContext, useState } from "react";
import { FormContext, updateEntrenador, updatePokemon } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
    // Aqui deberíamos acceder al estado global para poder obtener los datos
    // del formulario y una manera de actualizar los mismos.

    const { dispatch } = useContext(FormContext)
    // También, utilizaremos un estado local para manejar el estado del input.
    const [value, setValue] = useState("")

    const onChange = (e) => {
        // Aquí deberíamos actualizar el estado local del input.
        setValue(e.target.value)
    };

    const onBlur = (e) => {
        e.preventDefault();
        if(e.target.name.includes("Pokemon")) {
            dispatch(updatePokemon(e.target.name, e.target.value))
        } else {
            dispatch(updateEntrenador(e.target.name, e.target.value))
        }
        // Aqui deberíamos actualizar el estado global con los datos de
        // cada input.
        // TIP: Podemos utilizar el nombre de cada input para guardar
        // los datos en el estado global usando una notación de { clave: valor }
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
