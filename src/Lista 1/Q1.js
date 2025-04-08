class Q1 {
    constructor() {
        this.dados = [];
    }

    push(letra) {
        this.dados.push(letra);
    }
    pop() {
        return this.dados.pop();
    }
    isEmpty() {
        return this.dados.length === 0;
    }
}

function inverterPilha(palavra) {
    let pilha = new Q1();

    // Empilhando os caracteres:
    for(let char of palavra) {
        pilha.push(char);
    }

    let palavraInvertida = "";

    // Desemplilhando os caracteres:
    while(!pilha.isEmpty()) {
        palavraInvertida += pilha.pop();
    }
    return palavraInvertida;
}

// A saída esperada é IXACABA:

console.log(inverterPilha("ABACAXI"));