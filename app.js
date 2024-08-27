// Declaración de variables
const textoInput = document.getElementById('texto');
const resultadoOutput = document.getElementById('resultado');
const encriptarBtn = document.getElementById('encriptar-btn');
const desencriptarBtn = document.getElementById('desencriptar-btn');
const copiarBtn = document.getElementById('copiar-btn');


function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}


function encriptarTexto() {
    const texto = textoInput.value;
    if (!validarTexto(texto)) {
        alert('El texto contiene mayúsculas o caracteres especiales no permitidos.');
        return;
    }

    
    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    resultadoOutput.value = textoEncriptado;
}


function desencriptarTexto() {
    const texto = textoInput.value;
    if (!validarTexto(texto)) {
        alert('El texto contiene mayúsculas o caracteres especiales no permitidos.');
        return;
    }

  
    const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    resultadoOutput.value = textoDesencriptado;
}


function copiarTexto() {
    const texto = resultadoOutput.value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado al portapapeles.');
        })
        .catch(err => {
            alert('Error al copiar el texto: ', err);
        });
}

// Conectar las funciones a los botones correspondientes
encriptarBtn.addEventListener('click', encriptarTexto);
desencriptarBtn.addEventListener('click', desencriptarTexto);
copiarBtn.addEventListener('click', copiarTexto);
