export const getTypeOfPokemon = async () => {
    return await fetch("https://pokeapi.co/api/v2/type/")
        .then((response => response.json()))
        .catch((error) => console.log(error));
};

export const postPokemonForm = async (data) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export const getSpeciesOfPokemon = async () => {
    return await fetch("https://pokeapi.co/api/v2/pokemon-species/")
    .then((response => response.json()))
    .catch((error) => console.log(error));
}