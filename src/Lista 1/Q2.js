class Q2 {
    constructor() {
        this.TAMANHO = 10; // Tamanho total do vetor compartilhado
        this.vetor = new Array(this.TAMANHO);
        this.topoA = -1;
        this.topoB = this.TAMANHO;
    }

    // Inicializa as pilhas
    inicializarPilhas() {
        this.topoA = -1;
        this.topoB = this.TAMANHO;
    }

    // Verifica se a Pilha A está vazia
    eVaziaA() {
        return this.topoA === -1;
    }

    // Verifica se a Pilha B está vazia
    eVaziaB() {
        return this.topoB === this.TAMANHO;
    }

    // Empilha na Pilha A
    empilhaA(valor) {
        if (this.topoA + 1 === this.topoB) {
            console.log("Erro: Pilhas cheias");
            return;
        }
        this.vetor[++this.topoA] = valor;
    }

    // Empilha na Pilha B
    empilhaB(valor) {
        if (this.topoB - 1 === this.topoA) {
            console.log("Erro: Pilhas cheias");
            return;
        }
        this.vetor[--this.topoB] = valor;
    }

    // Desempilha da Pilha A
    desempilhaA() {
        if (this.eVaziaA()) {
            console.log("Erro: Pilha A vazia");
            return null;
        }
        return this.vetor[this.topoA--];
    }

    // Desempilha da Pilha B
    desempilhaB() {
        if (this.eVaziaB()) {
            console.log("Erro: Pilha B vazia");
            return null;
        }
        return this.vetor[this.topoB++];
    }
}

// Exemplo de uso:
const pilhas = new Q2();
pilhas.empilhaA(10);
pilhas.empilhaB(20);
console.log(pilhas.desempilhaA()); // Deve imprimir 10
console.log(pilhas.desempilhaB()); // Deve imprimir 20
