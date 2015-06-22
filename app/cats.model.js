var cats;
(function (cats) {
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
