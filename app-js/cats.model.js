/*
 * cats.model.js
 * Model module
*/

/*global cats */

cats.model = (function () {
  'use strict';
  var initModule, getCat;

  initModule = function () {
  };

  getCat = function() {
    return "tabby";
  }

  return {
    initModule : initModule,
    getCat     : getCat
  };
}());
