/*
 * cats.view.js
 * View module
*/

/*global cats */

cats.view = (function () {
  'use strict';
  var initModule, render;

  initModule = function () {
  };

  render = function() {
    return cats.model.getCat;
  }

  return {
    initModule : initModule,
    render     : render
  };
}());
