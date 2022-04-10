let submitEnviar = document.querySelector('.submit-enviar');
let inputNome = document.querySelector('#input-nome');
let textareaMsg = document.querySelector('#textarea-msg');
let caracteresRestantes = document.getElementById('caracteres').children;

function contaCaracter(){
    caracteresRestantes[1].textContent = 200 - textareaMsg.value.length;

    if(textareaMsg.value.length < 180){
        caracteresRestantes[0].style.color = '#464646';
        caracteresRestantes[1].style.color = '#464646';
    }else if(textareaMsg.value.length >= 180 && textareaMsg.value.length <= 199) {
        caracteresRestantes[0].style.color = '#FF0000';
        caracteresRestantes[1].style.color = '#FF0000';
    }
}

function validacao(){
    if(inputNome.value == '' && textareaMsg.value == ''){
        document.querySelector('.grupo-nome').style.borderColor = 'red';
        document.querySelector('.grupo-msg').style.borderColor = 'red';
        alert('Preencha todos os campos corretamente');
    }else if(!inputNome.value == '' && textareaMsg.value == ''){
        textareaMsg.focus();
        document.querySelector('.grupo-nome').style.borderColor = '#c8c8c8';
        document.querySelector('.grupo-msg').style.borderColor = 'red';
        alert('Preencha o campo Mensagem');
    }else if(inputNome.value == '' && !textareaMsg.value == ''){
        inputNome.focus();
        document.querySelector('.grupo-nome').style.borderColor = 'red';
        document.querySelector('.grupo-msg').style.borderColor = '#c8c8c8';
        alert('Preencha o campo Nome');
    }else{
        document.querySelector('.grupo-nome').style.borderColor = '#c8c8c8';
        document.querySelector('.grupo-msg').style.borderColor = '#c8c8c8';
        alert('Mensagem enviada, Obrigado!');
        inputNome.value = '';
        textareaMsg.value = '';
        caracteresRestantes[1].textContent = 200;
    }
}