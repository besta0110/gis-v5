const { Text, Select, Relationship, File, CloudinaryImage } = require('@keystonejs/fields');
const { fileAdapter, cloudinaryAdapter } = require('../FileAdapters');
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
    },
    author: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    status: {
      type: Select,
      options: [{ label: 'Pending', value: 'pending' }, { label: 'Rejected', value: 'rejected' }, { label: 'Approved', value: 'approved' }],
      defaultValue: 'pending',
      access: {
        create: ({ authentication, originalInput }) => { console.log('originalInput', originalInput); return authentication.item.isAdmin || originalInput.status === 'pending'; },
        update: ({ authentication }) => authentication.item.isAdmin,
      }
    },
  },
  access: {
    read: ({ authentication: { item, listKey } }) => ( item.isAdmin || { author: { email: item.email }}),
  }
}
