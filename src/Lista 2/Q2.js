class FilaUsandoPilha {
    constructor() {
        this.pilha1 = [];
        this.pilha2 = [];
    }

    enqueue(x) {
        this.pilha1.push(x); // Empilha na pilha1
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia");
        }

        if (this.pilha2.length === 0) {
            // Transfere todos os elementos da pilha1 para a pilha2
            while (this.pilha1.length > 0) {
                this.pilha2.push(this.pilha1.pop());
            }
        }

        return this.pilha2.pop(); // Remove da pilha2 (ordem correta)
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia");
        }

        if (this.pilha2.length === 0) {
            while (this.pilha1.length > 0) {
                this.pilha2.push(this.pilha1.pop());
            }
        }

        return this.pilha2[this.pilha2.length - 1];
    }

    isEmpty() {
        return this.pilha1.length === 0 && this.pilha2.length === 0;
    }

    size() {
        return this.pilha1.length + this.pilha2.length;
    }
}

const queue = new FilaUsandoPilha();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());   // 1
console.log(queue.dequeue()); // 1
console.log(queue.front());   // 2
console.log(queue.isEmpty()); // false

