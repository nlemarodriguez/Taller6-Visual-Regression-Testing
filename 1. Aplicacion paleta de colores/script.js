const textoInicial = `
.website-background{ color: #FFFFFF;}

.element-text{ color: #FFFFFF;}

.element-border{ border-color: #FFFFFF;}

.element-background{ background-color: #FFFFFF;}

.header{ color: #FFFFFF;}

`;

const cantidad = 5;
const angulo = (360 / cantidad);

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
    var color_inicial = Math.floor(Math.random() * 360);
    var colorFondo = RGBRandom(color_inicial);
    document.body.style.backgroundColor = colorFondo;

    //Cambiar el color del texto de los elementos
    color_inicial+= angulo;
    var colorTexto = RGBRandom(color_inicial);
    for (i = 0; i < cajitas.length; i++) {
        cajitas[i].style.color = colorTexto;
    }

    //Cambiar el color del borde de los elementos
    color_inicial+= angulo;
    var colorBorde = RGBRandom(color_inicial);
    for (i = 0; i < cajitas.length; i++) {
        cajitas[i].style.borderColor = colorBorde;
    }

    //Cambiar el color del fondo de los elementos
    color_inicial+= angulo;
    var colorFondoElementos = RGBRandom(color_inicial);
    for (i = 0; i < cajitas.length; i++) {
        cajitas[i].style.backgroundColor = colorFondoElementos;
    }


    //Cambiar el texto del encabezado
    color_inicial+= angulo;
    var colorH2 = RGBRandom(color_inicial);
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

function RGBRandom(color_inicial) {
    var rgb = hslToRgb(color_inicial/359, 0.5, 0.5);
    var r = rgb[0]
    var g = rgb[1]
    var b = rgb[2]
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}