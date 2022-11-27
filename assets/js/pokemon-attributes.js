const pokemonsAttributes = document.getElementById('pokemonsAttributes');
var offset = 0;
var limit = 125;

function convertPokemonToLiAttributes(pokemon) {
    return ` 
    <li class="pokemon ${pokemon.type} pokemonAttributes">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
            <div>
                <ul class="types displayFlex">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ul>
            </div>
            <div class="imgPokemon">
                <img
                    class="${pokemon.name}"
                    src="${pokemon.photo}"
                    alt="${pokemon.name}"
                />
            </div>
            <div class="attacks">
                <ul>
                ${pokemon.attacks.map((attacks) => `<li>${attacks}</li>`).join('')}
                </ul>
            </div>
            <div class="attributes">
                <ul>
                    <div>    
                        ${pokemon.statsNames.map((statsNames) => `<li>${statsNames}</li>`).join('')}
                    </div>
                    <div class="statsNumbers">
                        ${pokemon.statsNumbers.map((statsNumbers) => `<li>${statsNumbers}</li>`).join('')}
                    </div>
                </ul>
            </div>
        
    </li>
  `
}

function loadPokemonItensAttributes(offset, limit) {
    pokemonAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((convertPokemonToLiAttributes)).join('')
        pokemonsAttributes.innerHTML += newHtml
    })
}

loadPokemonItensAttributes(offset, limit);