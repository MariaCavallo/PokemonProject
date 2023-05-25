export const getTypeOfPokemon = async () => {
    return await fetch("https://pokeapi.co/api/v2/type/")
        .then((response => response.json()))
        .catch((error) => console.log(error));
};