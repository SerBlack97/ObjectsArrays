const pokemon = [
  {
    name: "Charmander",
    type: "fire",
    maxHp: 100,
    moves: ["Scratch", "Ember", "Flamethrower"]
  },
  {
    name: "Squirtle",
    type: "water",
    maxHp: 110,
    moves: ["Tackle", "Water Gun", "Bite"]
  },
  {
    name: "Pikachu",
    type: "electric",
    maxHp: 95,
    moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]
  },{
    name: "Lemon Man",
    type: "electric",
    maxHp: 50,
    moves: ["Dehydrated Yellow", "Lemon Time", "Good Job"]
  }
];

// page colors for types
const pageColor = {
  fire: '#FFCCCC',
  water: '#8DC7EB ',
  electric: '#FFF3CC',
  default: '#ffff'
};

// reference to html elements
const dropdown = document.getElementById('pokemons');
const displayDiv = document.getElementById('pokemonStats');

// dropdown options
pokemon.forEach(poke => {
  const items = document.createElement('option');
  items.text = poke.name;
  items.value = poke.name.toLowerCase();
  dropdown.add(items);
});

dropdown.addEventListener('change', (event) => {
  const selection = event.target.value;
  
  const choice = pokemon.find(p => p.name.toLowerCase() === selection);
  //selection with stats
  if (choice) {
    displayDiv.innerHTML = `
      <h2>${choice.name}</h2>
      <p><strong>Type:</strong> ${choice.type}</p>
      <p><strong>Max HP:</strong> ${choice.maxHp}</p>
      <p><strong>Moves:</strong> ${choice.moves.join(', ')}</p>
    `;
    //change page color
    document.body.style.backgroundColor = pageColor[choice.type] || pageColor.default;
  } else {
    //reset choice and color
    displayDiv.innerHTML = '<p>Select Pokémon</p>';
    document.body.style.backgroundColor = pageColor.default;
  }
});

