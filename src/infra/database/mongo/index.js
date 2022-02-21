const mongoose = require('mongoose');
require('dotenv/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.MONGODB_LOCAL);
  }
}

module.exports = new Database().connect();
