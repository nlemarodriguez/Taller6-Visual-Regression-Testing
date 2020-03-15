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