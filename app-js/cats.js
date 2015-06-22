/*
 * cats.js
 * Root namespace module
*/

/*global cats:true */

cats = (function () {
  'use strict';

  var initModule = function () {
    cats.model.initModule();
  };

  return {
    initModule : initModule
  };
}());
