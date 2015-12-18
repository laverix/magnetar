angular.module('mrmagnet').factory('webtorrentService', function ($http, $injector) {
    "use strict";

    var WebTorrent = require('webtorrent');
    var client = new WebTorrent();

    function addMagnet (magnetUrl) {
        return client.add(magnetUrl);
    }

    function getTorrents () {
        return client.torrents;
    }

    return {
        addMagnet: addMagnet,
        getTorrents: getTorrents
    }
});
