const textoInicial = `
.website-background{ color: #FFFFFF;}

.element-text{ color: #FFFFFF;}

.element-border{ border-color: #FFFFFF;}

.element-background{ background-color: #FFFFFF;}

.header{ color: #FFFFFF;}

`;


function randomPalette() {

}



function generateRules() {

}

function limpiarPaleta() {

    var areaTexto = document.getElementById("css-rules");
    areaTexto.value = textoInicial;
    for (let i = 1; i <= 5; i++) {
        var idDinamico = "color" + i;
        quitarClase(idDinamico);
    }

}

function quitarClase(elementId) {

    document.getElementById(elementId).className = "color-view";
}

function generarPaleta(){
    

}