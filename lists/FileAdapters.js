const { LocalFileAdapter, CloudinaryAdapter } = require('@keystonejs/file-adapters');

console.log(process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_APIKEY, process.env.CLOUDINARY_SECKEY);
const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_APIKEY,
  apiSecret: process.env.CLOUDINARY_SECKEY,
  folder: process.env.CLOUDINARY_FOLDER,
});

const fileAdapter = new LocalFileAdapter({
  src: './uploads',
  path: '/uploads',
});

module.exports = { fileAdapter };