'use strict';

var appDirectives = angular.module('appDirectives', []);


appDirectives.directive("panel", function() {
    return{
        restrict: 'E',
        transclude:true,
        scope:{
            title: "@"
        },
        template:"<div style='border:3px solid #953b39'>" +
                "<div class='alert alert-danger'>{{title}}</div>"+
                "<div ng-transclude></div>"+
                "</div>"
    }
})

appDirectives.directive("codigo", function() {
    return{
        restrict: 'E',
        scope:{
            codigo: "@",
            nombre: "@",
            papellido: "@",
            sapellido: "@"
        },
        template:"<span>{{nombre}}.chartAt(0)</span>"
    }
})


appDirectives.directive("enter", function() {
    return function(scope, element, attrs) {

        element.text = attrs
        element.bind("mouseenter", function() {
            element.addClass(attrs.enter);
        })
    }
})



