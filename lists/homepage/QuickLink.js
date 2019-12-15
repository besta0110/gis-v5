const { Text } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
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