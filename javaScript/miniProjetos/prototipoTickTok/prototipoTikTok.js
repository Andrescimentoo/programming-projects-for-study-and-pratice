// Algoritimo é uma sequencia de passos que passamos para que determinada tarefa seja feita
//Lógica é uma sequencia de instruções/algoritimos escrita na lingua do computador a fim de que ele entenda

// baseado Nisso eu preciso primeiro pensar: O QUE EU QUERO FAZER?
// Eu quero que ao carregar a tela o primeiro video é iniciado.
//Quando o ato de Scrollamento (rolagem de tela) foi realizado, o computador/sistema interrompe o primeiro video
// e passa a rodar o próximo.
// Essa operação sera solicitada para o sistema atravez da linguagm javaScript,

// O que eu sei e aprendi a fazer. Primeiro, eu to querendo pegar um documento e manipular ele. AHHHHH Como que eu manipulo e pego esses DO....
// Issooo! por meio do DOM. Então como se escreve em javaScript esse algorítimo?


const containerDeVideos = document.querySelector(".videos-container") // eu pego O CONTAINER que eu quero manipular
const videos = document.querySelectorAll(".video-container video") // pego o documento específico do container que eu quero manipular.
console.log(videos)

// Função após pegar os objetos:
    // mostrar para o computador o tamanho total da tela e fazer ele identificar em que ponto da tela ele esta.
    // O computador vai saber em que parte da tela ele está, ele vai saber exatamente qual video está lá e ele vai tocar, então

    
    // Passo 1: mostrar o tamanho total da tela para o computador
    // Passo 2 : Mostrar qual video tocar
    // Passo 3: Pedir para ele tocar o video.
    // Vamos escrever essas Instruções em JavaScript:
function orquestrarVideos  () {
    const alturaTela = window.innerHeight // mostrando o tamanho total da tela para o computador
    const videoAtual = Math.round(containerDeVideos.scrollTop / alturaTela) // Passo 2 : Mostrar qual video tocar
    // como o computador entende qual video tá na tela?, a linha 29 é sobre instrui-lo a tocar o video
    // Mas como ele faz para entender?
    
    // através do scrollTop a gente deu para ele o container e todos os elemntos dentro do container
    // ele atribui um índice para cada elemento do container. se no container como de fato tem: só os videos......
    //para cada video ele vai atribuir um índice, atraves do índice em javascript conseguimos identificar a 
    //posição de todo e qualquer elemento. Por tanto atraves do ScrollTop dividimos o containerVideo/altura da tela 
    //Essa divisão gera um número, esse número é o índice, através desse índice o computador vai entender e saber
    // a posição de todo e cada elemnto daquele X container.
    // a cada vez que a tela é scrollada, a divião é executada e o computador sabe que video é aquele;
    // Na prática:
    console.log(videoAtual)

    //Mas o computador só sabe agora COMO identificar o video. Mas só isso. Ele vai falar blz. Eu sei 
    // que video que ta na tela/elemnto/objeto, mas o que você quer que eu faça com ele?
    // Eu sei muito bem o que tenho em mente para voce computador. quero que você a cada video que 
    //apareça em tela, você toque. Como eu digo isso para o computador em JavaScript? : 
    
    videos.forEach((video,index) => {
        // o computador na linha 29 já sabe identificar em que lugar da tela ele ta. Mas como que ele 
        // vai saber QUANDO é para executar uma determinada ação? 

        // Quando o mesmo resultado do forEtch for o mesmo resultado de videoAutual.
        // O forEtch vai ser um "useEffect vai kkkk" vai ficar supervisionando. Toda vez que 
        // o índice que o forEtch gerar para cada video, for o mesmo que o videoAtual gerar através da propriedade
        //skroll top, ele vai disparar a execução da tocaDeVideo. Como falar isso em javaScript?
        if(index === videoAtual){
            video.play()
        } else {
            video.pause()
            video.currentTime = 0;
        } 


    })

}

containerDeVideos.addEventListener('scroll', orquestrarVideos)
