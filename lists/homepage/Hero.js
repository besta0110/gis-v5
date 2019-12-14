const { Text, CloudinaryImage } = require('@keystonejs/fields');
const cloudinaryAdapter = require('../CloudinaryAdaper');
module.exports = {
  fields: {
    image: { 
      type: CloudinaryImage,
      adapter: cloudinaryAdapter,
    },
    title: {
      type: Text,
      isRequired: true
    },
    subTitle: {
      type: Text,
      isRequired: true
    }
  }
}
