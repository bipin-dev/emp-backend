const ModalEntity = require("../services_helper/ModalEntity");
const mongoose = require("mongoose");

// if (process.env.NODE_ENV == "prod") {
//   console.log("*** mongo atlas connnect ***");
//   mongoose.connect(
//     "mongodb+srv://stack_finance:qwerty321@cluster0-wo6jn.mongodb.net/stack_finance?retryWrites=true&w=majority"
//   );
// } else {
// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
console.log("*** local mongo connected ***");
mongoose.connect("mongodb://127.0.0.1/emp");
// }

class DBManager {
  constructor(framework, config) {
    this.fr = framework;
    this.config = config;
  }

  initialize() {
    let path = this.config.dir.app + this.config.dir.models;
    let entities = require(path);
    this.db = {};
    for (var enty of entities) {
      this.db[enty.collection_name] = new ModalEntity(enty);
    }
  }
}

module.exports = DBManager;
