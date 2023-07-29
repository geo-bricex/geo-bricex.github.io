/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('controllerInicio', function ($scope, $http) {// controller del inicio

    $(document).ready(function () {
        document.getElementById("ContenedorBajo").innerHTML += contenedorbajo;// crear fotter con chat ws
    });

    $scope.gotoplay = (identifier) => {
        location.href = "play.html?mode=" + identifier;
    };

    var contenedorbajo = "   <section id=\"Contact\" class=\"content-section\" >\n" +
            "                    <div class=\"container\">\n" +
            "                        <div class=\"block-heading\">\n" +
            "                            <h2>Contactanos</h2>\n" +
            "                            <p>Somos una empresa dedicada a la creación de aplicaciones Web</p>\n" +
            "                        </div>\n" +
            "                        <div class=\"row\">\n" +
            "                            <div class=\"col-sm-12 col-md-6 col-lg-6\">\n" +
            "                                <div class=\"contact-wrapper\">\n" +
            "                                    <div class=\"address-block border-bottom\">\n" +
            "                                        <h3 class=\"add-title\">Responsable</h3>\n" +
            "                                        <div class=\"c-detail\"><!-- PONER LOS ÍCONOS -->\n" +
            "                                            <span class=\"c-icon\"><i class=\"fas fa-building\" aria-hidden=\"true\"></i></span><span class=\"c-info\">&nbsp;BRICEX COMPANY</span>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"c-detail\"><!-- PONER LOS ÍCONOS -->\n" +
            "                                            <span class=\"c-icon\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span><span class=\"c-info\">&nbsp;Quevedo - Ecuador</span>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"c-detail\">\n" +
            "                                            <span class=\"c-icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span><span class=\"c-info\">+593 98 394 4322</span>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"c-detail\">\n" +
            "                                            <span class=\"c-icon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span><span class=\"c-info\">geovannybricex@hotmail.com</span>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"address-block\">\n" +
            "                                        <h3 class=\"add-title\">Creadores</h3>\n" +
            "                                        <div class=\"c-detail\">\n" +
            "                                            <span class=\"c-icon\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span><span class=\"c-info\">&nbsp;Geovanny Brito Casanova</span>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"c-detail\">\n" +
            "                                            <span class=\"c-icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span><span class=\"c-info\">+593 99 942 4267</span>\n" +
            "                                        </div> \n" +
            "                                        <div class=\"c-detail\">\n" +
            "                                            <span class=\"c-icon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span><span class=\"c-info\">geovannybricex@gmail.com</span>\n" +
            "                                        </div> <br/>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"col-sm-12 col-md-6 col-lg-6\">\n" +
            "                                <div class=\"form-wrap\">\n" +
            "                                    <div class=\"fname floating-label\"><br/>\n" +
            "                                        <input type=\"text\" class=\"floating-input\" name=\"full name\">\n" +
            "                                        <label >Nombre</label>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"fname floating-label\"><br/>\n" +
            "                                        <input type=\"text\" class=\"floating-input\" name=\"full name\">\n" +
            "                                        <label >Apellido</label>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"email floating-label\"><br/>\n" +
            "                                        <input type=\"email\" class=\"floating-input\" name=\"email\">\n" +
            "                                        <label>Email</label>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"contact floating-label\"><br/>\n" +
            "                                        <input type=\"tel\" class=\"floating-input\" name=\"contact\">\n" +
            "                                        <label >Mobile</label>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"company floating-label\"><br/>\n" +
            "                                        <textarea class=\"floating-input\" name=\"company\"></textarea>\n" +
            "                                        <label >Mensaje</label>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"submit-btn\">\n" +
            "                                        <button type=\"submit\">Enviar</button>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </section>\n" +
            "                <footer class=\"footer text-center\">\n" +
            "                    <div class=\"container\">\n" +
            "                        <ul class=\"list-inline\">\n" +
            "                            <li class=\"list-inline-item\">\n" +
            "                                <a class=\"social-link rounded-circle text-white mr-3\" href=\"https://www.facebook.com/lm.lfirma.lml\">\n" +
            "                                    <i  class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n" +
            "                                </a>\n" +
            "                            </li>\n" +
            "                            <li class=\"list-inline-item\">\n" +
            "                                <a class=\"social-link rounded-circle text-white mr-3\" href=\"https://www.instagram.com/geovanny_bc/\">\n" +
            "                                    <i class=\"fab fa-instagram\" aria-hidden=\"true\"></i>\n" +
            "                                </a>\n" +
            "                            </li>\n" +
            "                            <li class=\"list-inline-item\">\n" +
            "                                <a class=\"social-link rounded-circle text-white\" href=\"https://www.linkedin.com/in/geovanny-brito-casanova-69465a175/\">\n" +
            "                                    <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n" +
            "                                </a>\n" +
            "                            </li>\n" +
            "                        </ul>\n" +
            "                        <p class=\"text-muted small mb-0\">Copyright © BRICEX 2020</p>\n" +
            "                        <p class=\"text-muted small mb-0\">Diseñado por BRICEX </p>\n" +
            "                </footer>";
});

