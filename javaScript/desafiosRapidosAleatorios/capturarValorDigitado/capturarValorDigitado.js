const button = document.getElementById('btn')
   
// agora preciso descobrir como capturo tudo o que o usuario digitar no input.
// como escrevo isso em JavaScript? 
 function valorCapturado () {
      const input = document.getElementById("input-text").value
      console.log(input)
    }
    button.addEventListener('click',valorCapturado)

    
    // protinhoooo , fiquei feliz de poder exercitar mesmo que brevemente meu aprendizado,
    // que foi usar metodos e propriedades do DOM e do javaScript para construir uma logiazinha
    // que captura o valor digitado no input!