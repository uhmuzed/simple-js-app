let pokeRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "detailsUrl" in pokemon) {
    pokemonList.push(pokemon);
  } else {
    console.log("Incorrect input");
  }
}

function getAll() {
  return pokemonList;
}

function addDexEntry(pokemon) {
  //target ul class
  let dex = document.querySelector(".dex");
  //create li element in ul
  let dexItem = document.createElement("li");
  //create button in li
  let pokeButton = document.createElement("button");
  //make button text the Pokemon name
  pokeButton.innerText = pokemon.name;
  //add class to pokeButton
  pokeButton.classList.add("poke-button");
  //append button to li
  dexItem.appendChild(pokeButton);
  //append li to ul
  dex.appendChild(dexItem);
  //event listener for buttons
  pokeButton.addEventListener("click", function() {
    showPokeInfo(pokemon);
  })
}

//fetching data from api and using promise
function loadList() {
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function(json) {
    json.results.forEach(function(item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function(e) {
    console.error(e);
  })
}

//adding details to Pokemon
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(details) {
    //add details to items
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function(e) {
    console.error(e) {
    });
  })
}

//showing the information when click
function showPokeInfo(pokemon) {
  loadDetails(pokemon).then(function() {
    console.log(pokemon);
  });
}

return {
  add: add,
  getAll: getAll,
  addDexEntry: addDexEntry,
  loadList: loadList,
  loadDetails: loadDetails
};
})();

pokepokeRepository.loadList().then(function() {
  pokeRepository.getAll().forEach(function(pokemon) {
    pokeRepository.addDexEntry(pokemon);
  });
});
