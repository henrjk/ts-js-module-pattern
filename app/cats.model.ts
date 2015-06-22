module cats {

  var initModule = function(): void {
    // some init code here.
  }

  var getCat = function() : string {
    return "tabby";
  }

  export var model = {
    initModule : initModule,
    getCat     : getCat
  };

}
