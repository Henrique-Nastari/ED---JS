function decimalParaBinario(decimal) {
    if (decimal === 0) return '0';

    const pilha = [];
    let numero = decimal;

    while (numero > 0) {
        const resto = numero % 2;
        pilha.push(resto);
        numero = Math.floor(numero / 2);
    }

    let binario = '';
    while (pilha.length > 0) {
        binario += pilha.pop();
    }

    return binario;
}

// Exemplo de uso:
console.log(decimalParaBinario(10)); // Saída: "1010"
console.log(decimalParaBinario(42)); // Saída: "101010"
