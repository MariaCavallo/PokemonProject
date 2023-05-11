import { createContext, useReducer } from "react";

// Aqui debemos crear nuestro contexto y nuestro provider.
export const FormContext = createContext()

const ACTUALIZAR_ENTRENADOR = "ACTUALIZAR_ENTRENADOR"
const ACTUALIZAR_POKEMON = "ACTUALIZAR_POKEMON"

export const updateEntrenador = (name, value) => {
    const action = {
        type: ACTUALIZAR_ENTRENADOR,
        payload: {
            name: name,
            value: value
        }
    }
    return action
}

export const updatePokemon = (name, value) => {
    const reducedName = name.replace("Pokemon", "")
    const action = {
        type: ACTUALIZAR_POKEMON,
        payload: {
            name: reducedName,
            value: value
        }
    }
    return action
}

export const FormContextProvider = ({children}) => {
    const emptyState = {
        entrenador: {},
        pokemon: {},
    }


    const reducer = (state, action) => {
        let payload
        switch(action.type) {
            case ACTUALIZAR_ENTRENADOR:
                payload = action.payload
                return {...state, entrenador: {...state.entrenador, [payload.name]: payload.value}}
            case ACTUALIZAR_POKEMON:
                payload = action.payload
                return {...state, pokemon: {...state.pokemon, [payload.name]: payload.value}}
            default:
            throw new Error(`Acción desconocida. ${action.type}`)
        }
    }

    const [state, dispatch] = useReducer(reducer, emptyState)

    const value = {
        state,
        dispatch
    }
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}