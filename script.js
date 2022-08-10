function capturarPalaba() {
    let palabra = document.getElementById('encriptar').value;
    let parrafo = document.getElementById('texto-encriptado');
    let titulo = document.getElementById('titulo-resultado');
    let imagen = document.getElementById('imagen-resultado');
    let boton = document.getElementById('botoncopiar');
    document.getElementById('form').reset();
    boton.style.visibility = 'visible';
    titulo.style.display = 'none';
    imagen.style.display = 'none';
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
    document.getElementById('form').reset();

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

function copiar() {
    let parrafo = document.getElementById('texto-encriptado');
    var contenido = parrafo.innerHTML;
    navigator.clipboard.writeText(contenido);
}
