/**
 * ## ContextoFormulario
 * Contiene tanto el contexto como el provider para poder usarlo.
 * 
 * También incluye los métodos para poder usar el `dispatch` de una manera conveniente.
 * 
 * #### Utilización en el proyecto
 * Aquí vemos un diagrama de la forma que estamos usando este contexto.
 * ![diagrama formcontext](https://raw.githubusercontent.com/MariaCavallo/SpecializationFrontend/main/src/assets/formcontext.png)
 * @module ContextoFormulario
 */

import { createContext, useReducer } from "react";

/**
 * Es el contexto del Form, al usarlo con useContext retorna los valores `state` y `dispatch`.
 * 
 * El state contiene el estado del form, y con `dispatch` podemos usar las funciones para modificar dicho estado.
 * 
 * @example const { state, dispatch } = useContext(FormContext)
 */
export const FormContext = createContext()

const ACTUALIZAR_ENTRENADOR = "ACTUALIZAR_ENTRENADOR"
const ACTUALIZAR_POKEMON = "ACTUALIZAR_POKEMON"
const RESET = "RESET"

/**
 * Actualiza el entrenador. Se utiliza con el `dispatch` de FormContext .
 * @function
 * @param {string} name Nombre de la propiedad a modificar
 * @param {string} value Valor de la propiedad a modificar
 * @example dispatch(updateEntrenador("nombre", "Ezequiel"))
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
 * Actualiza el pokemon. Se utiliza con el `dispatch`.
 * @function
 * @param {string} name Nombre de la propiedad a modificar
 * @param {string} value Valor de la propiedad a modificar
 * @example dispatch(updatePokemon("altura", "26.3 cm"))
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
 * Resetea el formulario para que la informacion de entrenador y pokemon queden vacías. Se utiliza con el `dispatch`.
 * @function
 * @example dispatch(resetForm())
 * 
 */
export const resetForm = () => {
    const action = {
        type: RESET,
    }
    return action
}

/**
 * Es el proveedor del contexto del formulario.
 * 
 * Es necesario para poder usar FormContext.
 * 
 * @param {object} props 
 * @param {object} props.children
 * @example
 * <FormContextProvider>
 *    <App />
 * <FormContextProvider/>
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
            case RESET:
                return emptyState
        }
    }

    const [state, dispatch] = useReducer(reducer, emptyState)

    const value = {
        state,
        dispatch
    }

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}