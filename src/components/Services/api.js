export const getTypeOfPokemon = async () => {
    return fetch("https://pokeapi.co/api/v2/type/")
        .then((response => response.json()))
        .catch((error) => console.log(error));
};