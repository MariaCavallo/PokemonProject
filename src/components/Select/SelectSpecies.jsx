import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { getSpeciesOfPokemon } from "../Services/api";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FormContext } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types'
import './SpeciesStyles.css'


const SelectSpecies = ({ name, label }) => {

    const { dispatch } = useContext(FormContext)
    const [isOpen, setIsOpen] = useState(false);
    const [speciesOffset, setSpeciesOffset] = useState(0);
    const [selected, setSelected] = useState(null);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["especies", speciesOffset],
        queryFn: getSpeciesOfPokemon,
    });

    const openPopup = (e) => {
        e.preventDefault();
        setIsOpen(true);
    }

    const closePopup = () => {
        setIsOpen(false);
    }

    const selectSpecie = (especie) => {
        setSelected(especie);
        dispatch({ type: 'ACTUALIZAR_POKEMON', payload: { name: 'especie', value: especie.name } });
        closePopup();
    }

    return (
        <div className="species-container">
            {isOpen && (
                <div className="popup-especie">
                    <h4>Seleccionar Especie</h4>
                    <div className="contendor-especies">
                        {data && data?.map((especie) => (
                            <button
                                key={especie.name}
                                className="select-species"
                                onClick={() => selectSpecie(especie)}
                            >
                                {especie.name}
                            </button>
                        ))}
                    </div>
                    {isLoading ? <p>Cargando datos...</p> : null}
                    <div className="paginador">
                        <button
                            className="boton-cerrar"
                            onClick={closePopup}
                        >
                            X
                        </button>
                        <button
                            className="boton-anterior"
                            disabled={speciesOffset <= 0 ? true : false}
                            onClick={() => setSpeciesOffset(speciesOffset - 20)}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className="boton-siguiente"
                            onClick={() => setSpeciesOffset(speciesOffset + 20)}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            )}
            <label htmlFor={name}>{label}</label>
            <button
                className="boton-seleccionar-especie"
                onClick={openPopup}
                disabled={isError || isLoading}
            >
                {selected ? selected.name : "Seleccionar"}
            </button>
        </div>
    );
};

SelectSpecies.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default SelectSpecies;