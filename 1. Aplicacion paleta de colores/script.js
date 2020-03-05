const textoInicial = `
.website-background{ color: #FFFFFF;}

.element-text{ color: #FFFFFF;}

.element-border{ border-color: #FFFFFF;}

.element-background{ background-color: #FFFFFF;}

.header{ color: #FFFFFF;}

`;

function limpiarPaleta() {

    var areaTexto = document.getElementById("css-rules");
    areaTexto.value = textoInicial;
    for (let i = 1; i <= 5; i++) {
        var idDinamico = "color" + i;
        quitarEstilo(idDinamico);
    }
    document.body.removeAttribute("style");

    var h2 = document.querySelectorAll("h2");
    for (i = 0; i < h2.length; i++) {
        h2[i].removeAttribute("style");
    }

}

function quitarEstilo(elementId) {
    document.getElementById(elementId).removeAttribute("style");
}

function generarPaleta() {

    var cajitas = document.querySelectorAll(".color-view");

    //Cambiar el fondo de la pagina
    var colorFondo = RGBRandom();
    document.body.style.backgroundColor = colorFondo;

    //Cambiar el color del texto de los elementos
    var colorTexto = RGBRandom();
    for (i = 0; i < cajitas.length; i++) {
        cajitas[i].style.color = colorTexto;
    }

    //Cambiar el color del borde de los elementos
    var colorBorde = RGBRandom();
    for (i = 0; i < cajitas.length; i++) {
        cajitas[i].style.borderColor = colorBorde;
    }

    //Cambiar el color del fondo de los elementos
    var colorFondoElementos = RGBRandom();
    for (i = 0; i < cajitas.length; i++) {
        cajitas[i].style.backgroundColor = colorFondoElementos;
    }


    //Cambiar el texto del encabezado
    var colorH2 = RGBRandom();
    var h2 = document.querySelectorAll("h2");
    for (i = 0; i < h2.length; i++) {
        h2[i].style.color = colorH2;
    }

    var areaTexto = document.getElementById("css-rules");
    var textoVariable = `
.website-background{ color: `+colorFondo+`;}

.element-text{ color: `+colorTexto+`;}

.element-border{ border-color: `+colorBorde+`;}

.element-background{ background-color: `+colorFondoElementos+`;}

.header{ color: `+colorH2+`;}

`;
    areaTexto.value = textoVariable;

}

function RGBRandom() {
    var r = Math.floor(Math.random() * 256);          // Random between 0-255
    var g = Math.floor(Math.random() * 256);          // Random between 0-255
    var b = Math.floor(Math.random() * 256);          // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}