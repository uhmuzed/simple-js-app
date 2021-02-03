let pokeRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  //modal variable
  let modalContainer = document.querySelector("#modal-container");

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
function loadDetails(poke) {
  let url = poke.detailsUrl;
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(details) {
    //add details to items
    poke.imageUrl = details.sprites.front_default;
    poke.id = details.id;
    poke.height = details.height;
    poke.types = [];
    details.types.forEach(function(pokeType) {
      poke.types.push(pokeType.type.name);
    });
  }).catch(function(e) {
    console.error(e);
    });
}

//start modal code
function showModal(pokemon) {
  //clear modal content
  modalContainer.innerHTML = "";
  //create modal div
  let modal = document.createElement("div");
  modal.classList.add("modal");

  //add close button
  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "X";
  closeButtonElement.addEventListener("click", hideModal);

  //add poke name h1
  let pokeName = document.createElement("h1");
  pokeName.innerText = pokemon.name;
  //create poke image
  let pokeSprite = document.createElement("img");
  pokeSprite.src = pokemon.imageUrl;
  //add poke info into p
  let pokeID = document.createElement("p");
  pokeID.innerText = "Dex#: " + pokemon.id;
  let pokeHeight = document.createElement("p");
  pokeHeight.innerText = "Height: " + pokemon.height;
  let pokeType = document.createElement("p");
  if (pokemon.types.length === 1) {
    pokeType.innerText = "Type: " + pokemon.types;
  } else {
    pokeType.innerText = "Types: " + pokemon.types.join(", ");
  }
  //append elements
  modal.appendChild(closeButtonElement);
  modal.appendChild(pokeName);
  modal.appendChild(pokeSprite);
  modal.appendChild(pokeID);
  modal.appendChild(pokeType);
  modal.appendChild(pokeHeight);
  modalContainer.appendChild(modal);

  modalContainer.classList.add("is-visible");
}

// hidemodal code
function hideModal() {
  modalContainer.classList.remove("is-visible");
}

//close modal via ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
    hideModal();
  }
});
//close modal via clicking on overlay
modalContainer.addEventListener("click", (e) => {
  let target = e.target;
  if(e.target === modalContainer) {
    hideModal();
  }
});

//showing the information when click
function showPokeInfo(pokemon) {
  loadDetails(pokemon).then(function() {
    showModal(pokemon);
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

pokeRepository.loadList().then(function() {
  pokeRepository.getAll().forEach(function(pokemon) {
    pokeRepository.addDexEntry(pokemon);
  });
});
