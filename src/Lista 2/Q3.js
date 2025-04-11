class GerenciadorCaminhoes {
    constructor(capacidadeMaxima = 10) {
        this.capacidadeMaxima = capacidadeMaxima;
        this.fila = [];
    }

    adicionarCaminhoneiro(nome) {
        if (this.fila.length >= this.capacidadeMaxima) {
            console.log("Limite de caminhões carregados no dia foi atingido.");
            return;
        }
        this.fila.push(nome);
        console.log(`Caminhoneiro ${nome} adicionado à fila.`);
    }

    removerCaminhoneiro() {
        if (this.fila.length === 0) {
            console.log("Nenhum caminhoneiro na fila.");
            return;
        }
        const atendido = this.fila.shift();
        console.log(`Caminhoneiro ${atendido} foi atendido e removido da fila.`);
    }

    haCaminhoneirosNaFila() {
        return this.fila.length > 0;
    }

    carregamentosAtingidos() {
        return this.fila.length >= this.capacidadeMaxima;
    }

    listarFila() {
        if (this.fila.length === 0) {
            console.log("Nenhum caminhoneiro aguardando.");
            return;
        }
        console.log("Caminhoneiros na fila:");
        this.fila.forEach((nome, index) => {
            console.log(`${index + 1}. ${nome}`);
        });
    }
}

const sistema = new GerenciadorCaminhoes();

sistema.adicionarCaminhoneiro("João");
sistema.adicionarCaminhoneiro("Maria");
sistema.adicionarCaminhoneiro("Pedro");

sistema.listarFila();
// 1. João
// 2. Maria
// 3. Pedro

sistema.removerCaminhoneiro(); // João é atendido

sistema.listarFila();
// 1. Maria
// 2. Pedro

console.log("Há caminhoneiros na fila?", sistema.haCaminhoneirosNaFila()); // true
console.log("Capacidade atingida?", sistema.carregamentosAtingidos()); // false
