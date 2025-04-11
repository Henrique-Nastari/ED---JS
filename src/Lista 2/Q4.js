function intercalarFilas(fila1, fila2) {
    const resultado = [];

    const copia1 = [...fila1]; // Evita alterar as filas originais
    const copia2 = [...fila2];

    while (copia1.length > 0 || copia2.length > 0) {
        if (copia1.length > 0) {
            resultado.push(copia1.shift());
        }
        if (copia2.length > 0) {
            resultado.push(copia2.shift());
        }
    }

    return resultado;
}

const filaA = [1, 3, 5];
const filaB = [2, 4, 6, 8];

const filaIntercalada = intercalarFilas(filaA, filaB);

console.log(filaIntercalada);
// Saída: [1, 2, 3, 4, 5, 6, 8]
