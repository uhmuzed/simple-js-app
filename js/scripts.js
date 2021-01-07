let pokemonList = [
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

//Iterates name and height of Pokemon
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 7) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - 'Wow, that's huge!'");
  } else if (pokemonList[i].height < 1 ) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - 'Awww, that's smol.'");
  } else {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - 'That's average-size.'");
  }
}
