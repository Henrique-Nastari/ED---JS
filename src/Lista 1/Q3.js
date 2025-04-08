class Q3 {
    constructor() {
        this.tamanho = 5;
        this.vetor = new Array(this.tamanho);
        this.topo = -1;
    }

    // Verifica se a pilha está vazia
    eVazia() {
        return this.topo === -1;
    }

    // Verifica se a pilha está cheia
    eCheia() {
        return this.topo === this.tamanho - 1;
    }

    // Empilha um elemento
    empilha(valor) {
        if (this.eCheia()) {
            console.log("Erro: Pilha cheia");
            return;
        }
        this.vetor[++this.topo] = valor;
    }

    // Desempilha um elemento
    desempilha() {
        if (this.eVazia()) {
            console.log("Erro: Pilha vazia");
            return null;
        }
        return this.vetor[this.topo--];
    }

    // Troca o topo e a base da pilha
    trocaTopoBase() {
        if (this.eVazia() || this.topo === 0) {
            return; // Nada a trocar se a pilha estiver vazia ou tiver apenas um elemento
        }

        let aux = new Q3(); // Pilha auxiliar
        let base = this.vetor[0];
        let topo = this.vetor[this.topo];

        // Transfere todos os elementos para a pilha auxiliar
        while (!this.eVazia()) {
            aux.empilha(this.desempilha());
        }

        // Reinsere os elementos de volta, invertendo a base e o topo
        this.empilha(topo);
        while (aux.topo > 0) {
            this.empilha(aux.desempilha());
        }
        this.empilha(base);
    }
}
