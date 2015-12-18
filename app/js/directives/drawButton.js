angular.module('mrmagnet').directive('drawButton', function () {
    function importButon (element) {
        var icon = element.attr('data-icon');
        var path = 'svg/' + icon + '.svg';
        var container = Snap('#' + element.attr('id'));

        Snap.load(path, function (svg) {
            container.append(svg);
        });
    }

    return {
        link: function ($scope, element) {
            importButon(element);

            element.bind('click', function () {
                element.html('OK');
            });

/*
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
*/

/*
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
*/
        }
    };
});
