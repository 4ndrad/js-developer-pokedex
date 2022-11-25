<<<<<<< HEAD
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
var offset = 0;
var limit = 9;

function convertPokemonToLi(pokemon) {
    return ` 
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img
                class="${pokemon.name}"
                src="${pokemon.photo}"
                alt="${pokemon.name}"
            />
        </div>
    </li>
  `
}

function loadPokemonItens(offset, limit){
    pokemonAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((convertPokemonToLi)).join('')
=======
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
        pokemonList.innerHTML += newHtml
    })
}

<<<<<<< HEAD
loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})


=======
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
