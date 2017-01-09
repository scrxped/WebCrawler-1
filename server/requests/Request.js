// Generated by CoffeeScript 1.11.1
var Request, bodyParser, colors, compression, cookieParser, express, helmet, qt;

qt = require('quickthumb');

colors = require('colors');

express = require('express');

cookieParser = require('cookie-parser');

bodyParser = require('body-parser');

compression = require('compression');

helmet = require('helmet');

module.exports = Request = (function() {
  function Request(app) {
    this.app = app;
    this.config = {
      dirs: {
        "public": __dirname + "/../../public",
        bower: __dirname + "/../../public/bower_components"
      }
    };
    this.enableHelmet();
    this.enableImagesResize();
    this.enableCompression();
    this.setResponseMethods();
    this.setParsers();
    this.setStaticDirs();
  }

  Request.prototype.setResponseMethods = function() {
    this.app.success = function(res, data, msg) {
      return res.json({
        code: 200,
        success: true,
        message: msg || null,
        data: data
      });
    };
    return this.app.error = function(res, error) {
      return res.json({
        code: error.statusCode,
        success: false,
        message: error.message,
        data: null
      });
    };
  };

  Request.prototype.setParsers = function() {
    this.app.use(cookieParser());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    return this.app.logger.info('✓ '.bold.green + 'Loaded requests parsers.');
  };

  Request.prototype.setStaticDirs = function() {
    this.app.use('/', express["static"](this.config.dirs["public"]));
    this.app.use('/', express["static"](this.config.dirs.bower));
    return this.app.logger.info('✓ '.bold.green + 'Loaded static directories.');
  };

  Request.prototype.enableHelmet = function() {
    this.app.use(helmet());
    return this.app.logger.info('✓ '.bold.green + 'Security protocols enabled.');
  };

  Request.prototype.enableCompression = function() {
    this.app.use(compression());
    return this.app.logger.info('✓ '.bold.green + 'Enabled gzip compression on requests.');
  };

  Request.prototype.enableImagesResize = function() {
    this.app.use('/', qt["static"](__dirname + '/../../public'));
    return this.app.logger.info('✓ '.bold.green + 'Enabled images resize on requests.');
  };

  return Request;

})();

//# sourceMappingURL=Request.js.map
