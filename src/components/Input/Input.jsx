/**
 * ## Componente Input
 * Componente para renderizar un contenedor con un texto descriptivo y un input.
 * @module Input
 * @example
 * <Input name="nombre" label="Nombre: " />
 * 
 */

import { useContext, useState } from "react";
import { FormContext, updateEntrenador, updatePokemon } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types';
import "./InputStyles.css";


/**
 * 
 * @param {object} props
 * @param {string} props.name `name` del input, también define el `id`
 * @param {string=} props.label Texto descriptivo del input
 * @param {string=} props.type Tipo del input, por defecto `text`
 * 
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
                autoComplete="off"
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

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
}

export default Input;
