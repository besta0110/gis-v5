const { Text } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true
    },
    skill: {
      type: Text,
      isRequired: true
    },
    code: {
      type: Text,
      isRequired: true
    },
    uppercase: { 
      type: Text,
      isRequired: true
    },
    showmore: { 
      type: Wysiwyg
    },
  }
};
