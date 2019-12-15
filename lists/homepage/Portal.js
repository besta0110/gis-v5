const { Text, File, CloudinaryImage } = require('@keystonejs/fields');
const { fileAdapter, cloudinaryAdapter } = require('../FileAdapters');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

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
  }
}