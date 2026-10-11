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
  }
];

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
  
  if (choice) {
    displayDiv.innerHTML = `
      <h2>${choice.name}</h2>
      <p><strong>Type:</strong> ${choice.type}</p>
      <p><strong>Max HP:</strong> ${choice.maxHp}</p>
      <p><strong>Moves:</strong> ${choice.moves.join(', ')}</p>
    `;
  } else {
    // Clear the display if the default option is selected
    displayDiv.innerHTML = '<p>Select a Pokémon</p>';
  }
});

