angular.module('mrmagnet').filter('bytes', function () {
    return function (bytes, precision) {

        if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';

        if (typeof precision === 'undefined') precision = 1;

        var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
        var number = Math.floor(Math.log(bytes) / Math.log(1024));

        var digit = (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision);
        var unit = units[number];

        return (digit == 'NaN' ? '0' : digit) + ' ' + (unit === undefined ? 'kB' : unit);
    }
});

