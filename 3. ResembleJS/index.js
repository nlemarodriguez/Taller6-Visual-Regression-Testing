const resemble = require("resemblejs");
const fs = require('fs');

function comparar(imagen1, imagen2, resultado) {
    var diff = resemble(imagen1)
        .compareTo(imagen2)
        .ignoreLess()
        .onComplete(function (data) {
            fs.writeFileSync(resultado, data.getBuffer());
            console.log(data);
        });

        return diff;
}

imagen1 = "./imagenes/1. antes/Login_correcto_antes.png"
imagen2 = "./imagenes/2. despues/Login_correcto_despues.png"
imagenResultado = "./imagenes/3. comparacion/Login_correcto.png"

resultado = comparar(imagen1, imagen2, imagenResultado);


imagen1 = "./imagenes/1. antes/Login_fallido_antes.png"
imagen2 = "./imagenes/2. despues/Login_fallido_despues.png"
imagenResultado = "./imagenes/3. comparacion/Login_fallido.png"

resultado = comparar(imagen1, imagen2, imagenResultado);


imagen1 = "./imagenes/1. antes/Registro_fallido_antes.png"
imagen2 = "./imagenes/2. despues/Registro_fallido_despues.png"
imagenResultado = "./imagenes/3. comparacion/Registro_fallido.png"

resultado = comparar(imagen1, imagen2, imagenResultado);