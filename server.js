require('dotenv').config();
require('module-alias/register');
const boot = require('@service/boot');
const mongoose = require('mongoose');
const config = require('@config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCrateIndex', true);

if (config.db.connectionString) {
  mongoose.connect(config.db.connectionString, boot);
} else {
  console.log('No connection string provided.');
}
