const path = require('path'),
    fs = require('fs');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, "/config.json"), "utf8"));
const CONFIG = {}
CONFIG.ENV = (process.env.NODE_ENV || config.env);
CONFIG.port = (process.env.VCAP_APP_PORT || config.port);
CONFIG.DB_URL = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;
CONFIG.secret = "youcanfindme";
CONFIG.mongoport = config.mongodb.port;
module.exports = CONFIG;