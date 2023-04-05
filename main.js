document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );
document.getElementById( "btn-soma" ).addEventListener( "click" , soma );

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
    
}

