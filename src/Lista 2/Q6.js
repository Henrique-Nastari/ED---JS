function reverterFila(fila) {
    if (fila.length === 0) {
        return;
    }

    // Remove o primeiro elemento
    const elemento = fila.shift();

    // Chamada recursiva
    reverterFila(fila);

    // Adiciona no final ao "voltar da recursão"
    fila.push(elemento);
}

const fila = [1, 2, 3, 4, 5];
console.log("Antes:", [...fila]);

reverterFila(fila);
console.log("Depois:", fila);
// Saída esperada: [5, 4, 3, 2, 1]
