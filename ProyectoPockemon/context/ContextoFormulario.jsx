import { createContext, useReducer } from "react";

/**
 * Contexto del form que al usuarlo con useContext
 * retorna los valores `state` y `dispatch`
 * 
 * El state contiene el estado del form, y con un dispatch podemos usar la funcion
 * para modificar la funcion
*/

export const FormContext = createContext()

const ACTUALIZAR_ENTRENADOR = "ACTUALIZAR_ENTRENADOR"
const ACTUALIZAR_POKEMON = "ACTUALIZAR_POKEMON"

/**
 * Actualizar el entrenador
 * @author MariaCavallo
 * @param {string} name 
 * @param {string} value 
 * @returns
 */

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

/**
 * Actualizar el pokemon
 * @author MariaCavallo
 * @param {string} name 
 * @param {string} value 
 * @returns 
 */

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

/**
 * Proveedor de contexto del formulario
 * @author MariaCavallo
 * @param {object} props
 * @returns {React.Provider<any>}
 */

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
        }
    }

    const [state, dispatch] = useReducer(reducer, emptyState)

    const value = {
        state,
        dispatch
    }
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}