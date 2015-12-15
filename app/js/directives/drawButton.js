angular.module('mrmagnet').directive('drawButton', function () {
    function importButon (element) {
        console.log(
            element.attr('data-icon')
        );
    }

    return {
        link: function ($scope, element) {
            importButon(element);

            element.bind('click', function () {
                element.html('You clicked me!');
            });

            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });

            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});
