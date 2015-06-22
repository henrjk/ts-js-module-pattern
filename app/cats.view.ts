module cats {
  var initModule = function () {
  };

  var render = function() {
    return cats.model.getCat();
  }

  export var view = {
    initModule: initModule,
    render: render
  };
}
