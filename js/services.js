'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource', 'LocalStorageModule']);


appServices.factory('Espanol', function() {
    var Espanol = {};
    Espanol = [
        {
            id:1,
            nombre: "Carlos",
            papellido: "Fallas",
            sapellido: "Calderón",
            done:false,
            estado:true
        },
        {
            id:2,
            nombre: "Daniel",
            papellido: "Rojas",
            sapellido: "Portilla",
            done:false,
            estado:true
        },
        {
            id:3,
            nombre: "Heriberto",
            papellido: "Abarca",
            sapellido: "Gonzales",
            done:false,
            estado:true
        },
        {
            id:4,
            nombre: "Andrey",
            papellido: "Pérez",
            sapellido: "Pineda",
            done:false,
            estado:false
        },
        {
            id:5,
            nombre: "Karen",
            papellido: "González",
            sapellido: "Rojas",
            done:false,
            estado:false
        },
        {
            id:6,
            nombre: "Katherine",
            papellido: "Calderón",
            sapellido: "Jiménez",
            done:false,
            estado:false
        },
        {
            id:7,
            nombre: "Josué",
            papellido: "Martínez",
            sapellido: "Montenegro",
            done:false,
            estado:false
        }
    ];
    return Espanol;
});

appServices.factory('Ingles', function() {
    var Ingles = {};
    Ingles = [
        {
            id:1,
            nombre: "Ashley",
            papellido: "Alderete",
            sapellido: "Point",
            done:false,
            estado:true
        },
        {
            id:2,
            nombre: "Charlie",
            papellido: "Facer",
            sapellido: "Palmer",
            done:false,
            estado:true
        },
        {
            id:3,
            nombre: "Phil",
            papellido: "Palmer",
            sapellido: "Mortenson",
            done:false,
            estado:true
        },
        {
            id:4,
            nombre: "Andrey",
            papellido: "Rear",
            sapellido: "Window",
            done:false,
            estado:false
        },
        {
            id:5,
            nombre: "Karen",
            papellido: "Bumper",
            sapellido: "Sticker",
            done:false,
            estado:false
        },
        {
            id:6,
            nombre: "Katherine",
            papellido: "Low",
            sapellido: "Gravity",
            done:false,
            estado:false
        },
        {
            id:7,
            nombre: "Josué",
            papellido: "Aviri",
            sapellido: "Minch",
            done:false,
            estado:false
        }
    ];
    return Ingles;
});

appServices.factory('InglesEspanol', function() {
    var Espanol = {};
    Espanol = [
        {
            id:1,
            nombre: "Marcela",
            papellido: "Gutiérrez",
            sapellido: "Feoli",
            done:false,
            estado:true
        },
        {
            id:2,
            nombre: "Gerardo",
            papellido: "Parajeles",
            sapellido: "Blandón",
            done:false,
            estado:true
        },
        {
            id:3,
            nombre: "Bryan",
            papellido: "Cascante",
            sapellido: "Rojas",
            done:false,
            estado:true
        },
        {
            id:4,
            nombre: "María",
            papellido: "Milagro",
            sapellido: "Chacón",
            done:false,
            estado:false
        },
        {
            id:5,
            nombre: "María Eugenia",
            papellido: "Vindas",
            sapellido: "Blanco",
            done:false,
            estado:false
        },
        {
            id:6,
            nombre: "Nicole",
            papellido: "Chacón",
            sapellido: "Aguilar",
            done:false,
            estado:false
        },
        {
            id:7,
            nombre: "Juan Pablo",
            papellido: "López",
            sapellido: "Mendoza",
            done:false,
            estado:false
        }
    ];
    return Espanol;
});
