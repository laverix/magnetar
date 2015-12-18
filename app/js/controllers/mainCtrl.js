angular.module('mrmagnet').controller('MainCtrl', function MainCtrl ($scope, webtorrentService) {
    'use strict';

    var ipc = require('electron').ipcRenderer;

    $scope.getTorrents = function () {
        webtorrentService.getTorrents();
    }

    $scope.getTorrents();

    $scope.showMagnetField = function () {
        var magnetPanel = document.querySelector('.magnet-panel');
        var magnetField = document.querySelector('#magnet-field');

        magnetPanel.classList.remove('hide');

        magnetField.setAttribute('autofocus', true);
    }

    $scope.showTorrentDialog = function () {
        ipc.send('choose-torrent-file');
    };

    /**
     *
     * #TODO: Implement callback
     */
    $scope.applyMagnetUrl = function (event) {
        webtorrentService.addMagnet($scope.magnetUrl);

        $scope.getTorrents();
    }
});
