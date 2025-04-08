class PilhaDePratos {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.pilhas = [[]]; // Começa com uma pilha vazia
    }

    empilha(valor) {
        let ultimaPilha = this.pilhas[this.pilhas.length - 1];

        if (ultimaPilha.length >= this.capacidade) {
            // Capacidade atingida, cria nova pilha
            ultimaPilha = [];
            this.pilhas.push(ultimaPilha);
        }

        ultimaPilha.push(valor);
    }

    desempilha() {
        while (this.pilhas.length > 0) {
            const ultimaPilha = this.pilhas[this.pilhas.length - 1];
            if (ultimaPilha.length === 0) {
                this.pilhas.pop(); // Remove pilhas vazias
            } else {
                return ultimaPilha.pop();
            }
        }

        return null; // Todas as pilhas estavam vazias
    }

    // (Opcional) Método para visualizar as pilhas
    exibirPilhas() {
        console.log(this.pilhas);
    }
}
