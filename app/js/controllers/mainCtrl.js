angular.module('mrmagnet').controller('MainCtrl', function MainCtrl ($scope, $interval, webtorrentService) {
    'use strict';

    let ipc = require('electron').ipcRenderer;
    let remote = require('electron').remote;

    let dialog = remote.dialog;

    $scope.files = [];

    function getTorrents () {
        if (webtorrentService.getAllTorrents().length) {
            $scope.files = [];

            angular.forEach(webtorrentService.getAllTorrents(), function (torrent) {
                let metadata = {};

                if (torrent.infoHash === undefined) {
                    return;
                }

                metadata.name = torrent.name;
                metadata.downloadSpeed = torrent.downloadSpeed;
                metadata.uploadSpeed = torrent.uploadSpeed;
                metadata.progress = torrent.progress;
                metadata.infoHash = torrent.infoHash;
                metadata.timeRemaining = torrent.timeRemaining;

                $scope.files.push(metadata);
            });
        }
    }

    $scope.showMagnetField = function () {
        let magnetPanel = document.querySelector('.magnet-panel');
        let magnetField = document.querySelector('#magnet-field');

        magnetPanel.classList.toggle('hide');

        magnetField.setAttribute('autofocus', true);
    };

    $scope.showTorrentDialog = function () {
        let settings = {
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
    };

    $interval(function () {
        getTorrents();
    }, 1000);
});
