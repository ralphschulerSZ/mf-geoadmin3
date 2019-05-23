goog.provide('hello_world_controller');
goog.require('ngVueComponents');
(function () {
    // 'use strict';

    var module = angular.module('hello_world_controller', ['ngVueComponents']);

    module.controller("HelloWorldCtrl", function($scope, gaGeomUtils, gaLang, $translate) {  
        $scope.message = gaGeomUtils.demo("World");
        $scope.lang = gaLang.get();
        $scope.languages = ["de", 'en', 'fr', 'it'];
        $scope.translated = $translate.instant('no_more_information');
    } );
})();