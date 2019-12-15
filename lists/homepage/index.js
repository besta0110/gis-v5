const HeroSchema = require('./Hero');
const AnnouncementSchema = require('./Announcement');
const DownloadSchema = require('./Download');
const EventSchema = require('./Event');
const GoodsSchema = require('./Good');

module.exports = (keystone) => {
  keystone.createList('Hero', HeroSchema);
  keystone.createList('Announcement', AnnouncementSchema);
  keystone.createList('Download', DownloadSchema);
  keystone.createList('Event', EventSchema);
  keystone.createList('Good', GoodsSchema);
}