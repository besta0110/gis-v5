const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: 'cloudinary://333779167276662',
  apiKey: '_8jbSi9FB3sWYrfimcl8VKh34rI',
  apiSecret: '4c90ab4f6c666c19a003241dd6c557a452346b66ebfa8fa7d19f8adb53e6d60cb9687c83a8529a65e66c0773659ff5665f95ce7bc3268b7a20e9dd22364d5e98',
  folder: 'keystone-demo',
});

module.exports = cloudinaryAdapter;