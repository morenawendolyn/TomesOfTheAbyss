
#### index.js

```javascript
#!/usr/bin/env node

const tomes = [
  "The Book of the Hollow Sun – Said to contain rituals that can alter the movement of the stars.",
  "The Dread Codex – A tome filled with whispers that reveal knowledge at the cost of sanity.",
  "The Crimson Ledger – An ancient book that records the name of anyone who spills blood upon its pages.",
  "The Tome of Unmaking – Contains the true names of celestial beings, allowing one to erase their existence.",
  "The Midnight Grimoire – Said to be written by a being from beyond time, it describes futures that should not be known."
];

function getRandomTome() {
  return tomes[Math.floor(Math.random() * tomes.length)];
}

console.log("Welcome to Tomes of the Abyss!");
console.log("Here is a forbidden book and its power:");
console.log(getRandomTome());
