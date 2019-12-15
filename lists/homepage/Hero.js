const { Text, File, CloudinaryImage } = require('@keystonejs/fields');
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
    subTitle: {
      type: Text,
      isRequired: true
    },
  }
}
