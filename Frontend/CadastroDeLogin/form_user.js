
function enviar() {
    let ehemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.querySelector('#email').value;
    let senha1 = document.querySelector('#senha').value.toUpperCase();
    let senha2 = document.querySelector('#confirmasenha').value.toUpperCase();
    let tipo = document.querySelector('#tipo').value
    let adm = document.querySelector('#adm')

    console.log(tipo);
    

    if (adm.checked) {
        console.log('Solicitou para ser infernizado o tempo todo');
    } else console.log('Não quer se incomodar');
    
    

    if (ehemail.test(email)) {
        console.log(true);
    } else {
        alert('Insira um email valido!');
    }


    if (senha1.length >= 8){
        if (senha1 === senha2) {
            console.log(true);
        } else {
            alert('Senhas diferentes!');
        }
    } else {
        alert('Digite uma senha com no minimo 8 caracteres')
    }
}


function mascara(telefone){ 
    
    const isCelular = telefone.value.length === 9;

    if (isCelular){

        if(telefone.value.length == 9) {
            telefone.value = telefone.value + '-';
        }
        
        for (i = 0; i <= telefone.length; i++) {
            let celularformatado = telefone.substring(i, telefone.length);
            if (i == 9) telefone.value = telefone.value + '-';
            let campofone = document.querySelector('#fone');
            campofone.textContent(celularformatado);
        }
    }
    
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if(telefone.value.length == 8)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.


}