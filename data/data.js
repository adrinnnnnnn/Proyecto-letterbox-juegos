/* Data module: provides access to JSON data files for use in controllers */
 
const fs = require('fs');
const path = require('path');
 
const dataDir = path.join(__dirname);
 
/**
 * Reads and returns the content of games.json
 * @returns {Array} Array of game objects
 */
function getGames() {
  const raw = fs.readFileSync(path.join(dataDir, 'games.json'), 'utf8');
  return JSON.parse(raw);
}
 
/**
 * Returns a single game by its id
 * @param {string} id Game identifier
 * @returns {Object|undefined} Matching game object
 */
function getGameById(id) {
  return getGames().find(game => game.id === id);
}
 
 
module.exports = { getGames, getGameById };
 