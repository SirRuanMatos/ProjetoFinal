
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