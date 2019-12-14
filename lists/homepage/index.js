const HeroSchema = require('./Hero');

module.exports = (keystone) => {
  keystone.createList('Hero', HeroSchema);
}