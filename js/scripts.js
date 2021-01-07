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

//Declare variables
let pokeBig = "Wow, that's huge!";
let pokeAvg = "Awww, that's smol.";
let pokeSmol = "That's average-size.";
//Iterates name and height of Pokemon
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 7) {
    document.write("<br>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + pokeBig);
  } else if (pokemonList[i].height <= 1) {
    document.write("<br>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + pokeAvg);
  } else {
    document.write("<br>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + pokeSmol);
  }
}
