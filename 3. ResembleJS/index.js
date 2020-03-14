const resemble = require("resemblejs");
const fs = require('fs');

imagen1_login_correcto = "./imagenes/1. antes/Login_correcto_antes.png"
imagen2_login_correcto = "./imagenes/2. despues/Login_correcto_despues.png"
imagenResultado_login_correcto = "./imagenes/3. comparacion/Login_correcto.png"

var diff = resemble(imagen1_login_correcto)
    .compareTo(imagen2_login_correcto)
    .ignoreLess()
    .onComplete(function(data) {
        fs.writeFileSync(imagenResultado_login_correcto, data.getBuffer());
        console.log(data);
    });

