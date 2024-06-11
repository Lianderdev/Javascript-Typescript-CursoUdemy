
function menorString(frase) {
    // Dividindo a frase em palavras
    const palavras = frase.split(' ');
    
    // Inicializando a menor string com a primeira palavra da frase
    let menor = palavras[0];
    
    // Iterando sobre as palavras para encontrar a menor
    for ( let i in palavras) {
        // Se a palavra atual for menor que a armazenada, atualize a menor
        if (palavras[i].length < menor.length) {
            menor = palavras[i];
        }
    }
    
    // Retornando a menor string
    return menor;
}

// Exemplo de uso:
const frase = "Liander ama Veronica";
console.log("Menor string na frase:", menorString(frase)); // Saída: "é"