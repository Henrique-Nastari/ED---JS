class Deque {
    constructor() {
        this.itens = [];
    }

    inserirInicio(valor) {
        this.itens.unshift(valor);
    }

    removerInicio() {
        if (this.itens.length === 0) {
            console.log("Deque vazio.");
            return null;
        }
        return this.itens.shift();
    }

    inserirFim(valor) {
        this.itens.push(valor);
    }

    removerFim() {
        if (this.itens.length === 0) {
            console.log("Deque vazio.");
            return null;
        }
        return this.itens.pop();
    }

    imprimir() {
        console.log("Deque:", this.itens.join(" <- "));
    }

    estaVazio() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }
}

const deque = new Deque();

deque.inserirFim(10);
deque.inserirInicio(5);
deque.inserirFim(15);
deque.imprimir(); // Deque: 5 <- 10 <- 15

console.log(deque.removerInicio()); // 5
console.log(deque.removerFim());    // 15
deque.imprimir(); // Deque: 10
