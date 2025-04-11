class PilhaUsandoFila {
    constructor() {
        this.fila1 = [];
        this.fila2 = [];
    }

    push(x) {
        // Passo 1: Enfileira o novo elemento em fila2
        this.fila2.push(x);

        // Passo 2: Move todos os elementos de queue1 para fila2
        while (this.fila1.length > 0) {
            this.fila2.push(this.fila1.shift());
        }

        // Passo 3: Troca os nomes das filas
        const temp = this.fila1;
        this.fila1 = this.fila2;
        this.fila2 = temp;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Pilha vazia");
        }
        return this.fila1.shift(); // Remove o primeiro da fila (topo da pilha)
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("Pilha vazia");
        }
        return this.fila1[0]; // Primeiro da fila é o topo da pilha
    }

    isEmpty() {
        return this.fila1.length === 0;
    }

    size() {
        return this.fila1.length;
    }
}

const stack = new PilhaUsandoFila();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top()); // 30
console.log(stack.pop()); // 30
console.log(stack.top()); // 20
console.log(stack.isEmpty()); // false
