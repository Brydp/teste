document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );
document.getElementById( "btn-soma" ).addEventListener( "click" , soma );
document.getElementById( "btn-dividir" ).addEventListener( "click" , soma );
document.getElementById( "btn-multiplicar" ).addEventListener( "click" , soma );
document.getElementById( "btn-subtrair" ).addEventListener( "click" , soma );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usúario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value- "";
}
function soma() {
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado1" ).innerHTML = parseFloat (num1) + parseFloat (num2);
}
function dividir()
{
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado2" ).innerHTML = parseFloat (num1) / parseFloat (num2);
}
function multiplicar()
{
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado3" ).innerHTML = parseFloat (num1) / parseFloat (num2);
}
function subtrair()
{
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado4" ).innerHTML = parseFloat (num1) / parseFloat (num2);
}

