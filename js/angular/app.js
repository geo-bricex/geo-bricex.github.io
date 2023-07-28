/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app = angular.module('app', ['ngRoute']);//inicializar aplicación angular
//variable que obtiene la url del proyecto donde se obtiene los webservicies
var urlWebServicies = location.origin + "/crazygroup/webapis/";
//var urlWebServicies = location.origin + "/CrazyGroup/webapis/";

//app.directive('intense', function () {
//    return {
////      template : '<p>{{text}}</p>',
//        link: function (scope, elem, attrs) {
//            elem[0].src = attrs.intense;
//            Intense(elem[0]);
//        }
//    };
//});

