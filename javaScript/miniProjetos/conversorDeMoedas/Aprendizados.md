                                                    APRENDIZADOS DO PROJETO - CONVERSOR DE MOEDAS
 Este sem dúvida é um dos projetos mais especiais que eu posso resgistrar e ter feito. Por que? Por que nele eu coloquei garra, tempo e esforço assim como em todos os outros mas, esse projeto eu pude dar alguns passos pra trás e andar 2 a frente de onde eu estava antes de andar pra trás. Que como assim? 

 Eu aprendi muito com projetos em grupo e nas formações que tive e estou tendo, sobre bibliotecas e JavaScript mais avançado. Entretanto sofria com gaps na base. Era muito comodo para mim fazer projetos em bibliotecas modernas, cheias de metodos e propriedades que "facilitam a vida". Era como se eu aprendesse a dirijir num carro automático antes de aprebnder a dirigir num  carro manual. sabia acelerar, e freiar. Mudar a direção do carro com o volante. Mas e a embreagem? e a troca manual de marcha? Era como se não soubesse. Assim como quando precisava fazer interfaces e sistemas sem o auxilio de bibliotecas e frameWorks modernos eu travava. Digo a todos que lerem com toda a certeza: Eu não quero saber programar. Eu quero ser um programador, um Programador de verdade. E eu sabia que se continuasse daquela maneira não conseguiria alcançar esse objetivo!

 Então No módulo de DOM do DevClub pude aprender tudo sobre o DOM. E como manipular a arvore de elemntos de um documento HTML através dele. O desafio era fazer um conversor de moedas. E Esse projeto é muito especial pois conseggui 85% dele fazer sem olhar e assistir as aulals de novo. Foi como pegar um carro manual e andar pela cidade sem ter um professor controlando o carro com os pedais do lado dele. Tive problemas claro e erros . E é sobre eles que eu quero falar  agora. Como também sobre todo fluxo da lógica do projeto.




                                                               Lógica funcional  
A ideia do projeto era: o cliente tem uma interface apresentando: Uma option: com opção entre euro e dollar. o cliente deveria escolher entre as 2, se escolhesse dollar o que acontecia:

Ele digitava o valor que ele queria converter... o sistema pega esse valor através do .value e divide pelo valor atual do dollar que está armazenado em uma variavel do tipo const. Após a divisão do:
valor digitado pelo usuario - pelo valor do dollar atual
O resultado da conta é passado para um método chamado Math.round(que arrendonda um número quebrado pelo inteiro mais próximo). 


Erro: (Na etapa de seleção de um dos elementos do DOM o inpu value.....queria pegar o valor do INPUT mas estanciei a variavel fora do escopo da função
o java Script aplica o mesmo conceito de ordem de precedencia em operadores para funções em variaveis também. Ele sempre lê primeiro funções do que variaveis
então se você chama uma variavel acima e antes da declaração e estancia de uma função e depois tenta usar ela dentro do escopo da função, vai dar undefined por que 
o JS vai entender que aquela variavel não existe ainda. )


                                                              Lógica de Renderização

Após a parte funcional ser escrita a parte da renderização entra em jogo:

Os valores digitados inicialmente no INPUT que eram digitados pelo Usuario eram renderizados no campo  currencyValueToConvert atrvés da propriedade innerHTML
Os valores da operação de conversão eram renderizados no campo  convertedValue 

Mas o sistema deveria fazer mais duas coisas: 
1-Converter de forma estilizada e visual os valores tanto para converter quanto os convertidos
2-Mostrar ou os valores convertidos em euro ou em dollar.
Euro ou dollar. 2 saídas diferentes, se for euro o código leva um rumo.. se for dollar o código leva outro rumo...AHHH sim esta na hora das estruturas de controle:

usei IF para condicionar, se o valor selecionado pelo cliente fosse em euro então o valor digitado pelo cliente caia no bloco IF que dividia ess evalor pelo euro e através da prorpiedade INT.numberFormat formatava estilizadamente o número e depois renderizava em tela o valor da divisão e conversão

(*Ele é uma API que converte números em "valores específicos" e aí foi onde tive meu primeiro
erro: Eu estava tentando converter o número digitado pelo cliente primeiro, para depois realizar a divisão pelo dollar atual.
ué mais até aí ta certo, não tá? você converte o número sei la em reais e depois divide pelo dollar ou por euro.....NÂO! por que o INT.numberFormat transforma o número
em string estilizando o valor! então era como se eu estivesse realizando uma operação com um operador aritimético entre uma string (texto) e um número! lógico que vai dar erro. Viu como é importante entender não só como usar uma tecnologia mas COMO de fato ela funciona!)
                                                                          

logo após deveria conectar a option aos icons da interafce view. a ideia foi: se o cliente selecionar euro então não só a conversão e o resultado vão aparecer em euro,
mas a imagem também vai aparecer. Quando o cliente escolher a option de dollar , deve acontecer o mesmo!

Para isso usei mais uma estrutura de controle if que verifica (através do addEventListener('change') que fica ouvindo quando um estado muda): Se o cda option escolhida for euro então é renderizada em tela a img ./Euro.....

Erro: Estava escrevendo assim:
 if(typeCurrencyValue === 'Dollar'){
          currencyIcon.innerHTML = './assets/imgEUA.png'
}

funcionou quando eu mudei:
if(typeCurrencyValue === 'Dollar'){
          currencyIcon.src = './assets/imgEUA.png'
} 

innerHTMl = src

Por que? Por que o innerHTML é uma propriedade do JS que opera possibilitando a renderização e troca de valores sobre valores primitivos 
quando se trata de valores de referncia, como (objects, arrays e etc..) aí o jogo muda e temos que usar propriedades diferentes como nesse caso a propriedade img  

Viu mais uma vez como é importante entender não só como usar uma tecnologia mas COMO de fato ela funciona?!



Assim finalizei o Projeto conversor de moedsas usando diversos conceitos:
functions
operators
estruturas de condição
apis de integração(INT.numberFormat)
propryeties.js (innerHTML,img) 
seletores específicos do DOM ( querySelector e getELementByID)
metodos (math.round()) 


Foi realmente incrivel poder destravar meus conhecimentos em DOM e em JS e reforçar a minha base em programação podendo estar mais próximo de me tornar um Programador de verdade 


