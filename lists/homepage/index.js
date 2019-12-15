const HeroSchema = require('./Hero');
const AnnouncementSchema = require('./Announcement');
const DownloadSchema = require('./Download');
const EventSchema = require('./Event');
const GoodsSchema = require('./Good');
const JobSchema = require('./Job');
const PortalSchema = require('./Portal');
const QuickLinkSchema = require('./QuickLink');

module.exports = (keystone) => {
  keystone.createList('Hero', HeroSchema);
  keystone.createList('Announcement', AnnouncementSchema);
  keystone.createList('Download', DownloadSchema);
  keystone.createList('Event', EventSchema);
  keystone.createList('Good', GoodsSchema);
  keystone.createList('Job', JobSchema);
  keystone.createList('Portal', PortalSchema);
  keystone.createList('QuickLink', QuickLinkSchema);
}