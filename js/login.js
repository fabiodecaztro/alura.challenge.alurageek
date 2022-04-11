const filhos = document.querySelector('.login-filhos').children;
let email = filhos[1];
let senha = filhos[3];
let alertaEmail = filhos[2];
let alertaSenha = filhos[4]

let users = [
    user1 = {
        user: 'Alura',
        email: 'alura@oracle.com',
        senha: '123456',
        adm: 'true'
    },
    user2 = {
        user: 'Fabio Amorim',
        email: 'fabiodecaztro@gmail.com',
        senha: '112233'
    } 
]

function validaLogin(){
    let emailMin = email.value.toLowerCase();
    if(emailMin == '' && senha.value == '' ){
        email.style.borderColor = 'red';
        senha.style.borderColor = 'red';
        alertaEmail.style.display = 'block';
        alertaSenha.style.display = 'block';
    }else{
        if(!emailMin == ''){
            for(var i = 0; i < users.length; i++){
                if(emailMin == users[i].email){
                    let nome = users[i].user
                    email.style.borderColor = 'green';
                    alertaEmail.style.display = 'none';                    
                    if(senha.value == users[i].senha){                        
                        if(users[i].adm){
                            alert(`Bem vindo Administrador ${nome}`);
                            filhos[5].href = 'produto.html'
                        }else{
                            alert(`Bem vindo ${nome}`);
                        }
                        break;
                    }else{            
                        senha.style.borderColor = 'red';
                        alertaSenha.style.display = 'block';
                    }
                    break;
                }else{           
                    email.style.borderColor = 'red';
                    senha.style.borderColor = 'red';
                    alertaEmail.style.display = 'block';
                    alertaSenha.style.display = 'block';
                }
            }
        } 
    }       
}