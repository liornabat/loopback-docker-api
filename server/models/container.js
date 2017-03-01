'use strict';

var ContainerService = require('../services/container');


module.exports = function(Container) {
    const containerService = new ContainerService();

    Container.list = ((opt, cb) => containerService.getList(opt));
    Container.processes = ((opt, id, cb) => containerService.getProcess(opt, id));
    Container.kill = ((opt, id, cb) => containerService.kill(opt, id));



    Container.remoteMethod('list', {
        accepts: { arg: 'opt', type: 'Object' },
        returns: { arg: 'res', type: 'Object' },
        http: { path: '/list', verb: 'get' }
    })
    Container.remoteMethod('processes', {
        accepts: [{ arg: 'opt', type: 'Object' }, { arg: 'id', type: 'string' }],
        returns: { arg: 'res', type: 'Object' },
        http: { path: '/process', verb: 'get' }
    })

    Container.remoteMethod('kill', {
        accepts: [{ arg: 'opt', type: 'Object' }, { arg: 'id', type: 'string' }],
        returns: { arg: 'res', type: 'Object' },
        http: { path: '/kill', verb: 'post' }
    })

};