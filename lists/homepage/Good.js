const { Text, File, CloudinaryImage, Decimal } = require('@keystonejs/fields');
const { fileAdapter, cloudinaryAdapter } = require('../FileAdapters');

module.exports = {
  fields: {
    image: {
      type: CloudinaryImage,
      adapter: cloudinaryAdapter,
      isRequired: true
    },
    label: {
      type: Text,
      isRequired: true
    },
    desc: {
      type: Text,
      isRequired: true
    },
    currency: {
      type: Text,
      isRequired: true
    },
    price: {
      type: Decimal,
      isRequired: true
    }
  }
};