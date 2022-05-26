
/*
Case Sensitive
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe:getElementByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '50%'
email.style.width = '50%'
assunto.style.width = '50%'

function validaNome() {
    let textNome = document.querySelector('txtNome')
    if (nome.value.length < 3) {
        textNome.innerHTML = 'Nome Inválido'
        textNome.style.color = 'red'
    } else {
        textNome.innerHTML = 'Nome Válido'
        textNome.style.color = 'green'
        nomeOk = true
    }
}
    function validaEmail(){
        let txtEmail = document.querySelector('#email')
        if (email.value.indexOf('@') == -1 || email.validaEmail.indexOf ('.')){
            txtEmail.innerHTML = 'Email invalido'
            txtEmail.style.color = 'red'
        } else {
            txtEmail.innerHTML = 'Email valido'
            txtEmail.style.color = 'green'
            emailOk = true
        }
    }
    function validaAssunto(){
        let txtAssunto = document.querySelector('#assunto')
        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
        }else { txtAssunto.innerHTML = 'Texto válido'
        txtAssunto.style.color = 'green'
        }
    }
    function enviar(){
        if (nomeOk == true && emailOk == true && assuntoOk == true)
        alert('Formulario enviado com sucesso')
    } 
    function mapazoom(){
mapa.style.width = '800px' 
mapa.style.height ='600px'
    }
    function mapanormal(){
        mapa.style.width = '400px' 
        mapa.style.height ='250px'
    }


