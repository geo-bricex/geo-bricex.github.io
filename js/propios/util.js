/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function obtenerFecha() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var h = date.getHours();
    var min = date.getMinutes();
    var sg = date.getSeconds();
    var msg = date.getMilliseconds();

    return y + '-' + m + '-' + d;
}

window.onload = function () {
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
    $.getJSON('http://ip-api.com/json', function (data) {
        console.log(data);
    });

};

function cargando() {
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'visible';
    contenedor.style.opacity = '100';
}

function cargado() {
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

function regresar() {
    window.history.back();
}





