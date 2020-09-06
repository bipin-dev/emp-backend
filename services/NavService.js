class NavService {
  constructor(framework, config) {
    this.fr = framework;
    this.config = config;
    this.navs = [];
  }
  initialize() {
    let path = this.config.dir.app + this.config.dir.navs;
    this.navs = require(path);
  }

  get(req, res) {
    res.send( this.navs );
  }

}

module.exports = NavService;
