// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useReducer } from "react";

export const FormContext = createContext();

const initialState = {
  entrenador: {},
  pokemon: {},
};

const ACTUALIZAR_ENTRENADOR = "ACTUALIZAR_ENTRENADOR";
const ACTUALIZAR_POKEMON = "ACTUALIZAR_POKEMON";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTUALIZAR_ENTRENADOR:
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          [action.payload.name]: action.payload.value,
        },
      };
    case ACTUALIZAR_POKEMON:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      break;
  }
};

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function actualizarEntrenador(name, value) {
    const action = {
      type: ACTUALIZAR_ENTRENADOR,
      payload: {
        name: name,
        value: value,
      },
    };
    dispatch(action);
  }
  function actualizarPokemon(name, value) {
    const action = {
      type: ACTUALIZAR_POKEMON,
      payload: {
        name: name,
        value: value,
      },
    };
    dispatch(action);
  }

  const value = {
    state,
    actualizarEntrenador,
    actualizarPokemon
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
