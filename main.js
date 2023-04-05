document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usúario = document.getElementById( "nome" ).ariaValueMax;
    document.getElementById( "mensagem" ).innerText = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value- "";
}

