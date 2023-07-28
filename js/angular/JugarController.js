/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global urlWebServicies */

app.controller('controllerJugar', function ($scope, $http) {// controller del inicio

    let paramUrl = "fun", VoR = "verdad";
    let participantes = [];
    var elected = "";
    var boolChallenge = true;
    var boolChallengeApi = true;
    let synth = speechSynthesis, isSpeaking = true;
    $(document).ready(function () {

        document.getElementById("banner-contend-roulette").setAttribute("style", "display: none;");
        document.getElementById("banner-contend-play").setAttribute("style", "display: none;");
        document.getElementById("banner-contend-challenge").setAttribute("style", "display: none;");

        if (window.location.search !== "") {
            let urlParams = new URLSearchParams(window.location.search);
            paramUrl = urlParams.get('mode');
            if (paramUrl === 'full' || paramUrl === 'fun' || paramUrl === 'erotic' || paramUrl === 'extreme') {
                if (paramUrl !== 'erotic') {
                    document.getElementById("level-div").setAttribute("style", "display: none;");
                }
            } else {
                window.location.replace("./");
            }
        } else {
            window.location.replace("./");
        }
    });

    $scope.backReturn = () => {
        window.location.replace("./");
    };

    $scope.playgame = () => {
        if (document.getElementsByTagName("td").length > 3) {
            document.getElementById("banner-contend-roulette").setAttribute("style", "display: display");
            document.getElementById("banner-contend-challenge").setAttribute("style", "display: none");
            document.getElementById("banner-contend").setAttribute("style", "display: none");
            document.getElementById("banner-contend-play").setAttribute("style", "display: none");

            if (boolChallenge) {
                $scope.datastartGame();
            }

            boolChallenge = false;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Para empezar el juego tienen que ser más de dos participantes',
                footer: '<a href="https://www.facebook.com/geovannybricex">Contactame si no tienes amigos :)</a>'
            });
        }
    };

    $scope.datastartGame = () => {
        var alias = document.getElementsByTagName("td");
        var cantidad_alias = (alias.length);
        participantes = [];
        for (var i = 0; i < cantidad_alias / 3; i++) {
            participantes.push(alias[i * 3].innerHTML);
        }
        participantes.push("Todos");
        console.log(participantes);
//        localStorage.setItem("participantes", participantes);
        $scope.playRoulette();

//        var json = "";
//        $("table tbody tr").each(function () {
//            json = "";
//            $(this).find("td").each(function () {
//                $this = $(this);
//                json += ',"' + $this.attr("class") + '":"' + $this.html() + '"'
//            });
//            obj = JSON.parse('{' + json.substr(1) + '}');
//            console.log(obj);
//        });

//        let materiales = [];
//        document.querySelectorAll('.tablita tbody tr').forEach(function (e) {
//            console.log(e)
//            let fila = {
//                nombre: e.querySelector('#name_node').innerText,
//                genero: e.querySelector('#sex_node').innerText
//            };
//            materiales.push(fila);
//        });
//        console.log(materiales);
    };

    $scope.startGame = (VoR) => {
        if (VoR === "comodin") {
            let VoRoC = ["verdad", "reto"];
            VoR = VoRoC[Math.floor(Math.random() * VoRoC.length)];
//            console.log(VoR);
        }
        let startGameData = {//mejorar para que no haga otra petición
            "category": paramUrl,
            "mode": VoR,
            "level": "1"
        };
        apiStartGame(startGameData);
    };

    $scope.startGameAll = () => {
        let startGameData = {//mejorar para que no haga otra petición
            "category": paramUrl,
            "mode": "todos",
            "level": "1"
        };
        apiStartGame(startGameData);
    };

    apiStartGame = (api_param) => {
        $.ajax({
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            url: urlWebServicies + 'challengeapis/selectchallenge',
            data: JSON.stringify({...api_param}),
            beforeSend: (xhr) => {
                document.querySelector('#lblChallenge').innerText = "";
            },
            success: (data) => {
                document.getElementById("banner-contend-play").setAttribute("style", "display: none;");
                document.getElementById("banner-contend-challenge").setAttribute("style", "display: display;");
                document.querySelector('#lblChallenge').innerText = "";

                var jsonChallenge = data.data;
                var resultChallenge = jsonChallenge[0]; // jsonChallenge[Math.floor(Math.random() * jsonChallenge.length)];
                var darinChallenge = resultChallenge.daring;
                var id_challenge = resultChallenge.id_challenge;


                var victimChallenge = "";
                do {
                    victimChallenge = participantes[Math.floor(Math.random() * participantes.length)];
                } while (victimChallenge === elected || victimChallenge === "Todos");

                darinChallenge = darinChallenge.replaceAll("x-x-x-x-x", elected);
                darinChallenge = darinChallenge.replaceAll("y-y-y-y-y", victimChallenge);
                document.querySelector('#lblChallenge').innerText = darinChallenge;

                readChallenge(darinChallenge);

            },
            error: (objXMLHttpRequest) => {
                console.log("error: ", objXMLHttpRequest);
            }
        });
    };

    function readChallenge(textdarinChallenge) {
        if (textdarinChallenge !== "") {
            if (!synth.speaking) {
                textToSpeech(textdarinChallenge);
            }
            if (textdarinChallenge.length > 80) {
                setInterval(() => {
                    if (!synth.speaking && !isSpeaking) {
                        isSpeaking = true;
                    } else {
                    }
                }, 500);
                if (isSpeaking) {
                    synth.resume();
                    isSpeaking = false;
                } else {
                    synth.pause();
                    isSpeaking = true;
                }
            } else {
            }
        }
    }

    function textToSpeech(text) {
        let utterance = new SpeechSynthesisUtterance(text);
        for (let voice of synth.getVoices()) {
            if (voice.name === "Microsoft Helena Desktop - Spanish (Spain)") {
                utterance.voice = voice;
            }
        }
        synth.speak(utterance);
    }

    $scope.backMode = function () {
        //document.getElementById("banner-contend").setAttribute("style", "display: none");
        document.getElementById("banner-contend-roulette").setAttribute("style", "display: none");
        document.getElementById("banner-contend-play").setAttribute("style", "display: none");
        document.getElementById("banner-contend").setAttribute("style", "display: display");
    };

    $scope.playRoulette = function () {

        var options = participantes;//localStorage.getItem("participantes");
        var arc = Math.PI / (options.length / 2);

        var spinTimeout = null;
        var startAngle = 0;

        var spinArcStart = 10;
        var spinTime = 0;
        var spinTimeTotal = 0;

        var ctx;

        var lastElected = "";

        document.getElementById("spin").addEventListener("click", spin);

        function byte2Hex(n) {
            var nybHexString = "0123456789ABCDEF";
            return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
        }

        function RGB2Color(r, g, b) {
            return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
        }

        function getColor(item, maxitem) {
            var phase = 0;
            var center = 128;
            var width = 127;
            var frequency = Math.PI * 2 / maxitem;

            red = Math.sin(frequency * item + 2 + phase) * width + center;
            green = Math.sin(frequency * item + 0 + phase) * width + center;
            blue = Math.sin(frequency * item + 4 + phase) * width + center;

            return RGB2Color(red, green, blue);
        }

        function drawRouletteWheel() {
            var canvas = document.getElementById("canvas");
            if (canvas.getContext) {
                var outsideRadius = 200;
                var textRadius = 160;
                var insideRadius = 125;

                ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, 500, 500);

                ctx.strokeStyle = "black";
                ctx.lineWidth = 5;

                ctx.font = 'bold 25px Helvetica, Arial';

                for (var i = 0; i < options.length; i++) {
                    var angle = startAngle + i * arc;
                    //ctx.fillStyle = colors[i];
                    ctx.fillStyle = getColor(i, options.length);

                    ctx.beginPath();
                    ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
                    ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
                    ctx.stroke();
                    ctx.fill();

                    ctx.save();
                    ctx.shadowOffsetX = -1;
                    ctx.shadowOffsetY = -1;
                    ctx.shadowBlur = 0;
                    ctx.shadowColor = "rgb(220,220,220)";
                    ctx.fillStyle = "black";
                    ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                            250 + Math.sin(angle + arc / 2) * textRadius);
                    ctx.rotate(angle + arc / 2 + Math.PI / 2);
                    var text = options[i];
                    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
                    ctx.restore();
                }

                //Arrow
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
                ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
                ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
                ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
                ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
                ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
                ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
                ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
                ctx.fill();
            }
        }

        function spin() {
            spinAngleStart = Math.random() * 50 + 50;
            spinTime = 0;
            spinTimeTotal = Math.random() * 3 + 4 * 1000;
            rotateWheel();
        }

        function rotateWheel() {
            spinTime += 30;
            if (spinTime >= spinTimeTotal) {
                stopRotateWheel();
                return;
            }
            var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
            startAngle += (spinAngle * Math.PI / 180);
            drawRouletteWheel();
            spinTimeout = setTimeout(rotateWheel, 30);
        }

        function stopRotateWheel() {

            clearTimeout(spinTimeout);
            var degrees = startAngle * 180 / Math.PI + 90;
            var arcd = arc * 180 / Math.PI;
            var index = Math.floor((360 - degrees % 360) / arcd);
            ctx.save();
            ctx.font = 'bold 40px Helvetica, Arial';
            var text = options[index];
            ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
            elected = (text);
            ctx.restore();
            if (elected === lastElected) {
                spin();
            } else {
                var vof = setTimeout(truthOrDare, 2000);
                lastElected = elected;
            }
        }

        function easeOut(t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (tc + -3 * ts + 3 * t);
        }

        function truthOrDare() {
            if (elected !== "Todos") {
                document.getElementById("banner-contend-play").setAttribute("style", "display: display");
                document.getElementById("banner-contend-roulette").setAttribute("style", "display: none");
                document.getElementById("banner-contend").setAttribute("style", "display: none");
                document.querySelector('#lblparticipant').innerText = elected;
            } else {
                document.getElementById("banner-contend-challenge").setAttribute("style", "display: display;");
                document.getElementById("banner-contend-roulette").setAttribute("style", "display: none");
                document.getElementById("banner-contend-play").setAttribute("style", "display: none");
                document.getElementById("banner-contend").setAttribute("style", "display: none");

                $scope.startGameAll();
            }
        }

        drawRouletteWheel();
    };

});

