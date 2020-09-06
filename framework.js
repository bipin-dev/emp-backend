const fs = require("fs");
const ServicePath = "/services";
const express = require("express");
var app = express();
var cors = require("cors");
const bodyParser = require("body-parser");

class FrameWorkServer {
  constructor(config) {
    this.config = config;
  }

  initialize() {
    this.api = app;
    this.api.use(express.static(this.config.dir.app + "/public"));
    this.api.use(bodyParser.json({ limit: "50mb" }));
    this.api.use(
      bodyParser.urlencoded({
        extended: true,
        limit: "50mb",
      })
    );
    this.api.use(cors());
    this.api.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    this.configureServices()
      .then(() => this.DBManager.initialize())
      .then(() => this.initSessionPassport())
      .then(() => this.NavService.initialize())
      .then(() => this.RouterManager.initialize())
      .then(() => this.WorkflowService.initialize())
      .then(() => this.ActionService.initialize())
      .catch((err) => console.log(err));
  }

  initSessionPassport() {
    this.passport = this.PassportService.initialize();
    this.api.use(this.passport.initialize());
  }

  configureServices() {
    let serviceDir = this.config.dir.app + ServicePath;
    let services = fs.readdirSync(serviceDir);
    for (let f of services) {
      let _s = require(serviceDir + "/" + f);
      this[f.split(".")[0]] = new _s(this, this.config);
    }
    return Promise.resolve();
  }

  setupWorkflows() {}

  setupActions() {}

  startServer() {
    app.listen(this.config.port, (res) => {
      console.log("server running on : ", this.config.port);
    });
  }
}

module.exports = FrameWorkServer;
