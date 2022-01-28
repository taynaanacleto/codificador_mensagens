// Função para criptografar texto

function criptografy() {

    let textoValue = document.querySelector('input').value; //valor do texto capturado
    let arrayText = textoValue.split(''); // separação texto por array
    let textoCriptografado;

    for (var i = 0; i < arrayText.length; i++) {

        if (arrayText[i] == 'a') {
            arrayText[i] = 'ai'
        }
        else if (arrayText[i] == 'e') {
            arrayText[i] = 'enter'
        }
        else if (arrayText[i] == 'i') {
            arrayText[i] = 'imes'
        }
        else if (arrayText[i] == 'o') {
            arrayText[i] = 'ober'
        }
        else if (arrayText[i] == 'u') {
            arrayText[i] = 'ufat'
        }
    }

    textoCriptografado = arrayText.join('');
    
    let exibeCripto = document.getElementById('msg');
    
    exibeCripto.value = textoCriptografado;
}

/******** botão criptografar **********/
var btnCripto = document.querySelector('button');

btnCripto.addEventListener('click', function (e) {
    e.preventDefault();

    criptografy();
})

/******** Função de Descriptografia *********/
function converteTexto(textoCapturado){
    
    return textoCapturado.replaceAll('ai','a')
                         .replaceAll('enter','e')
                         .replaceAll('ims','i')
                         .replaceAll('ober','o')
                         .replaceAll('ufat','u');

 }

/********* botão descriptografar **********/
var btnDescripto = document.getElementById('btn-descripto');

btnDescripto.addEventListener('click', function(e){
    e.preventDefault();

    let textoCapturado = document.getElementById('input-texto').value;
    
    let exibeDesCripto = document.getElementById('msg');
    
    exibeDesCripto.value = converteTexto(textoCapturado);
})

/*****  botão copiar ******/
var btnCopiar = document.getElementById('copiar');

    btnCopiar.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector("#msg").select();
        document.execCommand("copy");
    })