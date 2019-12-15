require('dotenv').config();

const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const initialiseData = require('./initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "gis-v5";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      defaultValue: false,
      access: {
        // Only authenticated users and admins can read their or anyone's isAdmin field
        read: ({ existingItem, authentication }) => (
          authentication.item.isAdmin
          || existingItem.id === authentication.item.id
        ),
        // Only Admins can update anyone's isAdmin field.
        update: ({ authentication }) => authentication.item.isAdmin
      },
    },
    password: {
      type: Password,
      access: {
        // Only admins can see if a password is set. No-one can read their own or other user's passwords.
        read: ({ authentication }) => authentication.item.isAdmin,
        // Only authenticated users can update their own password. Admins can update anyone's password.
        update: ({ existingItem, authentication }) => (
          authentication.item.isAdmin
          || existingItem.id === authentication.item.id
        ),
      },
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

// initialize models for the pages
const { HomePageBuilder } = require('./lists');
HomePageBuilder(keystone);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      authStrategy,
    }),
    new NextApp({ dir: 'app' }),
  ],
};
