angular.module('mrmagnet').controller('MainCtrl', function MainCtrl ($scope, webtorrentService) {
    'use strict';

    var ipc = require('electron').ipcRenderer;
    var remote = require('electron').remote;

    var dialog = remote.dialog;

    $scope.files = [];

    /**
     * @TODO: show all torrents / Fix circular links in object
     */
    function getTorrents () {
        $scope.files = webtorrentService.getAllTorrents();
    }

    getTorrents();

    $scope.showMagnetField = function () {
        var magnetPanel = document.querySelector('.magnet-panel');
        var magnetField = document.querySelector('#magnet-field');

        magnetPanel.classList.remove('hide');

        magnetField.setAttribute('autofocus', true);
    }

    $scope.showTorrentDialog = function () {
        var settings = {
            properties: ['openFile'],
            filters: [{
                name: 'Torrents',
                extensions: ['torrent']
            }]
        };

        dialog.showOpenDialog(settings, function (file) {
            webtorrentService.seedingFiles(file);

            getTorrents();
        });
    };

    /**
     *
     * #TODO: Implement callback
     */
    $scope.applyMagnetUrl = function (event) {
        webtorrentService.addMagnet($scope.magnetUrl);

        getTorrents();
    }
});
