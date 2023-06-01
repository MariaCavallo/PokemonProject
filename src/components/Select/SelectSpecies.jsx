import React, { useState, useContext } from "react";
import { FormContext, updatePokemon } from "../../context/ContextoFormulario";
import { useQuery } from "react-query";
import { getSpeciesOfPokemon } from "../Services/api";
import  PropTypes from 'prop-types'
import './SpeciesStyles.css'


const SelectSpecies = ({ name, label }) => {

    const { dispatch } = useContext(FormContext);
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value)
    };

    const onBlur = (e) => {
        e.preventDefault();
        if(e.target.name.includes("Pokemon")) {
            dispatch(updatePokemon(e.target.name, e.target.value))
            }
        };
    
    const { data, isLoading, isError } = useQuery({
        queryKey: ["especies"],
        queryFn: getSpeciesOfPokemon
    });

    if (isLoading) return <div>Cargando datos...</div>

    if (isError) return <div style={{color: "red", fontWeight: 700}}>
        Ups! No se pudo cargar los datos.
        <p>{JSON.stringify(isError)}</p>
    </div>

    return (
        <div className="species-container">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} label={label} value={value} onChange={onChange} onBlur={onBlur} disabled={isError || isLoading}>
                <option defaultValue={true}>{"Especie"}</option>
                {data?.results.map((item) => (
                    <option key={item.name} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

SelectSpecies.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default SelectSpecies;