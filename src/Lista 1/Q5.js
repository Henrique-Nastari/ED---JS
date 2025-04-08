function estaBemFormado(sequencia) {
    const pilha = [];
    const pares = {
        ')': '(',
        ']': '['
    };

    for (let char of sequencia) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.length === 0 || pilha[pilha.length - 1] !== pares[char]) {
                return false; // Fecha algo que não foi aberto corretamente
            }
            pilha.pop(); // Fecha corretamente, remove o par da pilha
        }
    }

    return pilha.length === 0; // Deve estar vazia se tudo foi fechado corretamente
}

// Exemplos de uso:
console.log(estaBemFormado('[ ( ) [ ( ) ] ] ( )')); // true
console.log(estaBemFormado('( ( ) ]'));            // false
console.log(estaBemFormado('(([]))[]'));           // true
console.log(estaBemFormado('([)]'));               // false
