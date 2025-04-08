function removerDuplicatas(pilha) {
    const vistos = new Set();
    const resultadoReverso = [];

    // Percorre a pilha do topo para o fundo
    for (let i = pilha.length - 1; i >= 0; i--) {
        const valor = pilha[i];
        if (!vistos.has(valor)) {
            vistos.add(valor);
            resultadoReverso.push(valor); // Armazena o valor válido
        }
    }

    // Inverte pra manter a ordem relativa original
    return resultadoReverso.reverse();
}

// Exemplo de uso:
const entrada = [3, 7, 3, 2, 7, 1, 4, 2];
const resultado = removerDuplicatas(entrada);
console.log(resultado); // Saída: [3, 7, 2, 1, 4]
