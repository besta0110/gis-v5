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
    title: {
      type: Text,
      isRequired: true
    },
    brief: { 
      type: Text,
      isRequired: true
    },
    extended: {
      type: Wysiwyg
    },
  }
}
