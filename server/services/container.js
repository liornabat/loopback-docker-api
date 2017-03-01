const EndPointService = require('../services/endpoint');

class ContainerService {


    constructor() {
        this.dockerEndPoint = new EndPointService().EndPoint;
    }

    getList(opts) {

        return this.dockerEndPoint.container.list(opts)
            .then((result) => {
                return {
                    result: "success",
                    data: result.map((container) => container.data)
                }
            })
            .catch((error) => {
                return {
                    result: "error",
                    data: error
                }
            })

    }

    getProcess(opts, id) {
        return this.dockerEndPoint.container.get(id).top(opts)
            .then((result) => result)
            .catch((error) => error)
    }

    status(opts, id) {
        return this.dockerEndPoint.container.get(id).stats(opts)
            .then((result) => result.data)
            .catch((error) => error)
    }

    create(opts) {
        return this.dockerEndPoint.container.create(opts)
            .then((result) => result.data)
            .catch((error) => error)
    }


    kill(opts, id) {
        return this.dockerEndPoint.container.get(id).kill(opts)
            .then((result) => id)
            .catch((error) => error)
    }




}

module.exports = ContainerService;