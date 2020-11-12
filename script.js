// Fetching Original 151 Pokemon

function fetchOriginalPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => response.json())
        .then(function(allPokemon) {
            allPokemon.results.forEach(function(pokemon) {
                fetchPokemonData(pokemon)
            })
        })
}

function fetchPokemonData(pokemon) {
    let url = pokemon.url

    fetch(url)
        .then(response => response.json())
        .then(function(pokeData) {
            renderPokemon(pokeData)
        })
}



// Render Pokemon

function renderPokemon(pokeData) {

    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div");
    let pokeName = document.createElement('h4');

    createPokeImage(pokeData.id, pokeContainer);

    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p');

    pokeNumber.innerText = `#${pokeData.id}`;
    let pokeTypes = document.createElement('ul');
    createTypes(pokeData.types, pokeTypes);
    pokeContainer.append(pokeName, pokeNumber, pokeTypes);
    allPokemonContainer.appendChild(pokeContainer);
}

// Create Type helper function
function createTypes(types, ul) {
    types.forEach(function(type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

// Create Pokemon Image

function createPokeImage(pokeID, containerDiv) {
    let pokeImage = document.createElement('img')

    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;

    containerDiv.append(pokeImage);
}
fetchOriginalPokemon()
