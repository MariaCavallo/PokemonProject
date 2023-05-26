import React, { useState, useContext } from "react";
import { FormContext, updatePokemon } from "../../context/ContextoFormulario";
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled, TbX } from 'react-icons/tb'
import { useQuery } from "react-query";
import  PropTypes from 'prop-types'
import './SpeciesStyles.css'


const InputSpecies = ({ name, label }) => {

    const { state, dispatch } = useContext(FormContext);
    const [show, setShow] = useState(false);
    const [especiesOffset, setEspeciesOffset] = useState(0);

    const getSpeciesOfPokemon = async ({ queryKey }) => {
        
        const [key, offset] = queryKey;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=20`)
        
        const data = await response.json();
        return data.results;
    }
    
    const { data: especies, isLoading } = useQuery(
        ["especies", especiesOffset],
        getSpeciesOfPokemon
    )

    const closeSelect = () => {
        setShow(false)
    }

    const openSelect = (e) => {
        setShow(true)
    }

    const selectPokemon = (pokemon) => {
        const fakeEvent = {target: {name: 'especiePokemon', value: pokemon}}
        dispatch(updatePokemon(fakeEvent.target.name, fakeEvent.target.value))
        closeSelect();
    };

    return (
        <div className="input-contenedor-especies">
            
            {show && (
                <div className="popup-especie">
                    <h4>Seleccionar especie</h4>
                    <div className="contenedor-especies">
                        <button 
                            className="boton-cierre"
                            onClick={closeSelect}>
                            <TbX />
                        </button>
                        {especies && 
                        <section>
                            {especies.map(pokemon => (
                                <button 
                                    key={pokemon.name}
                                    className="botones-especie"
                                    onClick={() => selectPokemon(pokemon.name)}
                                >
                                    {pokemon.name}
                                </button>
                            ))}
                        </section>
                        ||
                        <section>
                            <p style={{fontSize: "2rem"}}>Cargando...</p>
                        </section>
                        }
                    </div>
                    <div className="paginador">
                        <button className="boton-anterior" 
                            onClick={() => setEspeciesOffset(especiesOffset - 20)}
                            disabled={especiesOffset <= 0 ? true : false}>
                                <TbPlayerTrackPrevFilled/>
                        </button>
                        <button className="boton-siguiente" 
                            onClick={() => setEspeciesOffset(especiesOffset + 20)}>
                                <TbPlayerTrackNextFilled />
                        </button>
                    </div>
                </div>
            )}
            <label htmlFor={name}>{label}</label>
            <button
                className="boton-seleccionar-especies"
                onClick={() => setShow(true)}
                disabled={isLoading}
            >
                Seleccionar
            </button>
        </div>
    );
};

InputSpecies.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default InputSpecies;