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
  //typeof pokemon === "object" && !== null ? pokemonList.push(pokemon) : "Not allowed.";
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

return {
  add: add,
  getAll: getAll
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
  //set height variables
  let pokeBig = "Wow, that's big!";
  let pokeAvg = "That's average-sized.";
  let pokeSmol = "Aww, that's smol.";

  if (pokemon.height > 7) {
    document.write(`<p>${pokemon.name} (height: ${pokemon.height}) - ${pokeBig}</p>`);
  } else if (pokemon.height <= 1) {
    document.write(`<p>${pokemon.name} (height: ${pokemon.height}) - ${pokeSmol}</p>`);
  } else {
    document.write(`<p>${pokemon.name} (height: ${pokemon.height}) - ${pokeAvg}</p>`);
  }
});
