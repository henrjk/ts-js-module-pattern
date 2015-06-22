var cats;
(function (cats) {
    var initModule = function () {
    };
    var render = function () {
        return cats.cats.model.getCat();
    };
    cats.view = {
        initModule: initModule,
        render: render
    };
})(cats || (cats = {}));
