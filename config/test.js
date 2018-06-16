'use strict';

const testConfig = {
  app: {
    protocol: 'http',
    host: 'localhost',
    port: 3010,
    url: 'http://localhost:3010'
  },
  db: {
    logging: false,
    host: 'localhost',
    username: 'node_user',
    password: 'node_user',
    name: 'node_db'
  }
};

module.exports = testConfig;