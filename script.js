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

/* evento de click do botão criptografar */
var btnCripto = document.querySelector('button');

btnCripto.addEventListener('click', function (e) {
    e.preventDefault();

    criptografy();
})

/******** Função de Descriptografia *********/
function converteTexto(textoCapturado){
    
    return textoCapturado.replaceAll('ai','a').replaceAll('enter','e').replaceAll('ims','i').replaceAll('ober','o').replaceAll('ufat','u');

 }



/* evento de click do botão descriptografar */
var btnDescripografar = document.getElementById('btn-descripto');

btnDescripografar.addEventListener('click', function(e){
    e.preventDefault();

    let textoCapturado = document.getElementById('input-texto').value;
    
    let exibeDesCripto = document.getElementById('msg');
    //console.log(exibeDesCripto)
    exibeDesCripto.value = converteTexto(textoCapturado);
})











// function converteTexto(textoCapturado){

//     let textoValue = document.querySelector('input').value; //valor do texto capturado
//     let arrayText = textoValue.split(''); // separação texto por array
//     let textoDescriptografado;

//     for (var i = 0; i < arrayText.length; i++) {
    
//         if (arrayText[i] == 'ai') {
//             arrayText[i] = 'a'
//         }
//         else if (arrayText[i] == 'enter') {
//             arrayText[i] = 'e'
//         }
//         else if (arrayText[i] == 'imes') {
//             arrayText[i] = 'i'
//         }
//         else if (arrayText[i] == 'ober') {
//             arrayText[i] = 'o'
//         }
//         else if (arrayText[i] == 'ufat') {
//             arrayText[i] = 'u'
//         }
//     }

//    

//     }