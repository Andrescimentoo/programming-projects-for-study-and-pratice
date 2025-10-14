
function encontrarMaiorPalavra(frase) {
    // Divide a frase em palavras usando o espaço como delimitador
    const palavras = frase.split(' ');

    // Inicializa uma variável para armazenar o índice da maior palavra
    let indiceMaior = 0;

    // Percorre cada palavra para encontrar a maior
    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i].length > palavras[indiceMaior].length) {
            indiceMaior = i; // Atualiza o índice da maior palavra
        }
    }

    return palavras[indiceMaior]; // Retorna a maior palavra encontrada
}

// Exemplo de uso
const resultado = encontrarMaiorPalavra("JavaScript é uma linguagem poderosa");
console.log(resultado); // Saída: "poderosa"







