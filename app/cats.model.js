var cats;
(function (cats) {
    'use strict';
    var initModule = function () {
    };
    var getCat = function () {
        return "tabby";
    };
    cats.model = {
        initModule: initModule,
        getCat: getCat
    };
})(cats || (cats = {}));
