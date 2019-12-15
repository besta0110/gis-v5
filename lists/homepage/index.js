const HeroSchema = require('./Hero');
const AnnouncementSchema = require('./Announcement');

module.exports = (keystone) => {
  keystone.createList('Hero', HeroSchema);
  keystone.createList('Announcement', AnnouncementSchema);
}