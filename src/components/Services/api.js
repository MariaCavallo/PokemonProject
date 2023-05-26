export const getTypeOfPokemon = () => {
    return fetch("https://pokeapi.co/api/v2/type/")
        .then((response => response.json()))
        .catch((error) => console.log(error));
};

export const postPokemonForm = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}