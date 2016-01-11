angular.module('mrmagnet').controller('MainCtrl', function MainCtrl ($scope, $interval, webtorrentService) {
    'use strict';

    var ipc = require('electron').ipcRenderer;
    var remote = require('electron').remote;

    var dialog = remote.dialog;

    $scope.files = [];

    /**
     * @TODO: show all torrents / Fix circular links in object
     */
    function getTorrents () {
        if (webtorrentService.getAllTorrents().length) {
            $scope.files = [];

            angular.forEach(webtorrentService.getAllTorrents(), function (torrent) {
                if (torrent.infoHash === undefined) {
                    return;
                }
                console.log(
                    torrent.downloadSpeed()
                );

                $scope.files.push(
                    JSON.parse(simpleStringify(torrent))
                );
            });
        }
    }

    $interval(function () {
        getTorrents();
    }, 1000);

    function simpleStringify (object) {
        var simpleObject = {};

        for (var prop in object) {
            if (!object.hasOwnProperty(prop)) {
                continue;
            }

            if (typeof(object[prop]) == 'object') {
                continue;
            }

            if (typeof(object[prop]) == 'function') {
                continue;
            }

            simpleObject[prop] = object[prop];
        }

        return JSON.stringify(simpleObject);
    }

    $scope.showMagnetField = function () {
        var magnetPanel = document.querySelector('.magnet-panel');
        var magnetField = document.querySelector('#magnet-field');

        magnetPanel.classList.remove('hide');

        magnetField.setAttribute('autofocus', true);
    };

    $scope.showTorrentDialog = function () {
        var settings = {
            properties: ['openFile'],
            filters: [{
                name: 'Torrents',
                extensions: ['torrent']
            }]
        };

        dialog.showOpenDialog(settings, function (file) {
            webtorrentService.seedingFiles(file, function (torrent) {
                getTorrents();
            });
        });
    };

    /**
     *
     * #TODO: Implement callback
     */
    $scope.applyMagnetUrl = function (event) {
        webtorrentService.addMagnet($scope.magnetUrl, function () {
            getTorrents();
        });
    }
});
