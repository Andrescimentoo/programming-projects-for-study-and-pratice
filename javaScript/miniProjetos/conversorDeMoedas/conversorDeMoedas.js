 // input capturado para nosso js entender e capturar o valor digitado pelo user 
const buttonToConvert = document.getElementById('button-to-convert') // botão que disparará nossa função
const convertedValue = document.querySelector('.converted-value')
const convertValue = document.querySelector('.convert-value')

const currrencyConverter = () => {
     const inputValue = document.querySelector('.input-value').value
     const dollarToDay = 7.5
     const currencyValue = convertValue.innerHTML = inputValue
     
     const convertValues = Math.round(currencyValue / dollarToDay)// valor digitado dividido pelo dollar hoje  "Intl.NumberFormat" API para melhorar o código
     convertedValue.innerHTML = convertValues





     // melhorar o Css e os nomes das variaveis
     // "desmockar" a variavel dollarToDay
     // adicionar formatação mais profissionall e precisa Int.NumberFormat   

    
     console.log(convertValues)
}   

buttonToConvert.addEventListener('click',currrencyConverter)

// Aprendi sem querer uma joia valiosa no código de hoje. o JavaScript para operadores segue a regra da ordem de precedencia
//onde idependentemente de tudo ele lê o que é mais importante primeiro.
// da mesma forma com funções e variavies o javaScript aplica a mesma formula de preceendica, so que não só em cima de operadores como +,- e etc.
//mas tambem em funções e variaveis.

//No código de hoje novamente tentei capturar o valor que o usuário digita no input. Entretanto estava dando erro o código, a função era instanciada mas sem valor nnehum.

// acontece que declarei a variavel que capturava o valor do meu input fora do escopo da função. mas a variavel está escrita primeiro que a minha função, por que estão
//dizendo que a variavel está sendo instanciada antes da função? que? acontece que o javaScript na hora de rodar o código ele altera a ordem, a alteração é baseada
// na ordem de precedencia, onde funções SEMPRE são instanciadas/ lidas primeiro pelo JavaScript. 

//é como se o Js trocasse a ordem na hora de ler o código

// o código rodou quando eu declarei minha variavel dentro do escopo da função!

// esse código é muito especial, por que representa para mim evolução e tranquilidade. Quero e estou determinado a ser um profissional programador para dar uma boa qualidade de vida para 
// minha futura familia. E vejo que estou no caminho certo. mas estar no caminho certo e não avançar, não vai te fazer cehgar lá. Agora estar no caminho certo e avançar nele
// isso sim te faz chegar lá, aonde eu quero estar daqui há alguns meses no máx um ano: Sendo um programador registrado podendo dar o meu melhor num time de devs, podendo ter um trabalho digno e prazeroso


// Esse código é prova de que estou no caminho certo. Não é o código mais lindo de todos, mas é um código que funciona e que eu consegui fazer sozinho, com tudo o que eu aprendi.
// usei o DOM para acessar a arvore de elementos do meu html e pegar componenetes e valores de componentes específicos, como também usei métodos e propriedades do javaScript
// e do DOM para guiar a lógica do código. Além de fazer parte da minha lógica conceitos já dominados há bastante tempo, como declaração e instanciamneto de funções
// e compreensão do hosting (ordem de como o js roda o código)   