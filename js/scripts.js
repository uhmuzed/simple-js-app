let pokeRepository = (function () {
  let pokemonList = [
  {
    name: "Dedenne",
    dexNumber: 702,
    type: ["Electric", "Fairy"],
    category: "Antenna",
    height: 0.08
  },
  {
    name: "Volcanion",
    dexNumber: 721,
    type: ["Fire", "Water"],
    category: "Steam",
    height: 5.07
  },
  {
    name: "Obstagoon",
    dexNumber: 862,
    type: ["Dark", "Normal"],
    category: "Blocking",
    height: 5.03
  },
  {
    name: "Zacian",
    dexNumber: 888,
    type: ["Fairy", "Steel"],
    category: "Warrior",
    height: 9.02
  },
  {
    name: "Zamazenta",
    dexNumber: 889,
    type: ["Fighting", "Steel"],
    category: "Warrior",
    height: 9.06
  }
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "dexNumber" in pokemon &&
    "type" in pokemon &&
    "category" in pokemon &&
    "height" in pokemon
  ) {
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
}

return {
  add: add,
  getAll: getAll,
  addDexEntry: addDexEntry
};
})();

pokeRepository.add({
  name: "Pidgey",
  dexNumber: 16,
  type: ["Normal", "Flying"],
  category: "Tiny Bird",
  height: 1.00
});

pokeRepository.getAll().forEach(function(pokemon) {
  pokeRepository.addDexEntry(pokemon);
});
