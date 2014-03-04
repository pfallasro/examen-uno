'use strict'

var appControllers = angular.module('appControllers', []);

appControllers.controller('ToDoListCtrl', ['$scope', 'Espanol', 'Ingles', 'InglesEspanol',
  function($scope, Espanol, Ingles, InglesEspanol) {

    $scope.init = function () {
      $scope.list =null;
      $scope.espanol = Espanol;
      $scope.ingles = Ingles;
      $scope.inglesespanol = InglesEspanol;

      $scope.list = $scope.espanol;

      $scope.titleAgregados = 'Lista Agentes Espanol - Agregados';
      $scope.titleRemovidos = 'Lista Agentes Espanol - Removidos';
    };

    $scope.init();

      $scope.listaEspanol = function(){
          $scope.list = $scope.espanol;
          $scope.titleAgregados = 'Lista Agentes Espanol - Agregados';
          $scope.titleRemovidos = 'Lista Agentes Espanol - Removidos';
      }

      $scope.listaIngles = function(){
          $scope.list = $scope.ingles;
          $scope.titleAgregados = 'Lista Agentes Ingles - Agregados';
          $scope.titleRemovidos = 'Lista Agentes Ingles - Removidos';
      }

      $scope.listaInglesEspanol = function(){
          $scope.list = $scope.inglesespanol;
          $scope.titleAgregados = 'Lista Agentes Ingles/Espanol - Agregados';
          $scope.titleRemovidos = 'Lista Agentes Ingles/Espanol - Removidos';
      }

    $scope.copyAll = function(){
          var result = [];

          angular.forEach($scope.list, function (value) {
              value.estado = true;
              result.push(value);
          });

          $scope.list = result;
      };

      $scope.removeAll = function(){
          var result = [];

          angular.forEach($scope.list, function (value) {
              value.estado = false;
              result.push(value);
          });

          $scope.list = result;
      };

      $scope.remove = function(){
          var result = [];

          angular.forEach($scope.list, function (value) {


              if(value.done){
                  value.done = false;
                  value.estado = false;
              }

              result.push(value);

          });
          $scope.list = result;
      };

      $scope.copy = function(){
          var result = [];

          angular.forEach($scope.list, function (value) {

              if(value.done){
                  value.done = false;
                  value.estado = true;
              }

              result.push(value);

          });

          $scope.list = result;
      };

  }]);


