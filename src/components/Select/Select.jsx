/**
 * ## Componente Select
 * Componente para renderizar un contenedor con un texto descriptivo y un input.
 * @module Select
 * @example
 * <Select name="nombre" label="Nombre: " />
 */

import React, {useContext, useState} from 'react'
import { useQuery } from "react-query";
import PropTypes from 'prop-types';
import { FormContext, updatePokemon } from '../../context/ContextoFormulario';
import './SelectStyles.css'

/**
 * @param {object} props
 * @param {string} props.name `name` del input, también define el `id`
 * @param {string=} props.label Texto descriptivo del input
 */

const SelectType = ({ name, label }) => {
    const { dispatch } = useContext(FormContext)
    const [value, setValue] = useState("")

    const onChange = (e) => {
        setValue(e.target.value)
    };

    const onBlur = (e) => {
        e.preventDefault();
        if(e.target.name.includes("Pokemon")) {
            dispatch(updatePokemon(e.target.name, e.target.value))
            }
        };

    const getTypeOfPokemon = async () => {
        const pokeData = await fetch("https://pokeapi.co/api/v2/type/")
            .then((response => response.json()))
            .catch((error) => console.log(error));
        return pokeData;
    };
                            //! queryKey       // async function
    const query = useQuery("getTypeOfPokemon", getTypeOfPokemon);
    const { data } = query;

    return (
        <div className="select-contenedor">
            <label htmlFor={name}>{label}</label>
            <select id={name} name={name} label={label} value={value} onChange={onChange} onBlur={onBlur}>
                <option defaultValue={true}>{" Tipo de pokemon "}</option>
                {data?.results.map((item) => (
                    <option key={item.name} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

SelectType.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default SelectType;