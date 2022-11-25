const pokemonAPI = {}

function convertPokemonApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokemonAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokemonApiDetailToPokemon)
}

pokemonAPI.getPokemons = (offset = 0, limit = 9) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        //pega o json e cria uma promise
        .then((response) => response.json())
        //pega a promise e deixa acessível no body 
        .then((jsonBody) => jsonBody.results)
        //promise de detalhes do pokemon e já trás em forma de json
        .then((pokemons) => pokemons.map(pokemonAPI.getPokemonDetail))
        //espera para pegar todos os detail
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        //caso de erro
        .catch((error) => console.error(error))
}