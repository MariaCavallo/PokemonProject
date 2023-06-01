import React, { useState } from "react";
import { useQuery } from "react-query";
import { getSpeciesOfPokemon } from "../Services/api";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import PropTypes from 'prop-types'
import './SpeciesStyles.css'


const SelectSpecies = ({ name, label }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [speciesOffset, setSpeciesOffset] = useState(1);

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

    const selectSpecie = (e) => {
        e.preventDefault();
    }

    return (
        <div className="species-container">
            {isOpen && (
                <div className="popup-especie">
                    <h4>Seleccionar Especie</h4>
                    <div className="contendor-especies">
                        {data && data.results?.map((especie) => (
                            <button
                                key={especie.name}
                                className="botones-especie"
                                onClick={selectSpecie}
                            >
                                {especie.name}
                            </button>
                        ))}
                    </div>
                    <div className="paginador">
                        <button
                            className="boton-cerrar"
                            onClick={closePopup}
                        >
                            X
                        </button>
                        <button 
                            className="boton-anterior"
                            disabled={speciesOffset <=0 ? true : false}
                            onClick={() => setSpeciesOffset(speciesOffset - 20)}
                        >
                            <FaArrowLeft/>
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
            >
                Seleccionar
            </button>
        </div>
    );
};

SelectSpecies.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default SelectSpecies;