function capturarPalaba() {
    let palabra = document.getElementById('encriptar').value;
    let parrafo = document.getElementById('texto-encriptado');
    let palabraObj = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat',
    };

    palabra = palabra.replace(/a|e|i|o|u/g, function (vocal) {
        return palabraObj[vocal];
    });

    parrafo.innerHTML = palabra;
}

function desencriptar() {
    let palabra = document.getElementById('encriptar').value;
    let parrafo = document.getElementById('texto-encriptado');
    let palabraObj = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u',
    };
    palabra = palabra.replace(/ai|enter|imes|ober|ufat/g, function (vocal) {
        return palabraObj[vocal];
    });

    parrafo.innerHTML = palabra;
}
