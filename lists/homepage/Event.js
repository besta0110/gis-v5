const { Text, File, CloudinaryImage, Url } = require('@keystonejs/fields');
const { fileAdapter, cloudinaryAdapter } = require('../FileAdapters');

module.exports = {
  fields: {
    image: {
      type: CloudinaryImage,
      adapter: cloudinaryAdapter,
      isRequired: true
    },
    title: {
      type: Text,
      isRequired: true
    },
    desc: {
      type: Text,
      isRequired: true
    },
    url: {
      type: Url,
      isRequired: true
    }
  }
};