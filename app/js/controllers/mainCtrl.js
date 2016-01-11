angular.module('mrmagnet').controller('MainCtrl', function MainCtrl ($scope, $interval, webtorrentService, bytesFilter) {
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
                var metadata = {};

                if (torrent.infoHash === undefined) {
                    return;
                }

                metadata.name = torrent.name;
                metadata.downloadSpeed = torrent.downloadSpeed;
                metadata.uploadSpeed = torrent.uploadSpeed;

                $scope.files.push(metadata);
            });
        }
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

    $scope.applyMagnetUrl = function () {
        webtorrentService.addMagnet($scope.magnetUrl, function (torrent) {
            getTorrents();
        });
    }

    $interval(function () {
        getTorrents();
    }, 1000);
});
