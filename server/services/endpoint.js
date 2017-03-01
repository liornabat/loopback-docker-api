const Docker = require('node-docker-api').Docker
const Config = require('../config/config')

class EndPointService {

    constructor() {

        this.EndPoint = new Docker(Config.DockerConnectionString);
    }


}

module.exports = EndPointService;