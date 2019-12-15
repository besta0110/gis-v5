const { Text, File } = require('@keystonejs/fields');
const { fileAdapter } = require('../FileAdapters');
module.exports = {
  fields: {
    image: {
      type: File,
      adapter: fileAdapter
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
