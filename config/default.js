'use strict';

const path = require('path');

const defaultConfig = {
  app: {
    protocol: 'http',
    host: 'localhost',
    port: 3010,
    url: 'http://localhost:3010',
    path: path.join(__dirname, '../apps/web'),
  },
  cookie: {
    secret: process.env.COOKIE_SECRET_KEY,
  },
  db: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: 8888,
  },
  session: {
    secure: false,
    secret: process.env.SESSION_SECRET
  },
};

module.exports = defaultConfig;
