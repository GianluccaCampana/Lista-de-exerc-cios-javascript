let calculadora = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b
}

console.log(`10 + 5 = ${calculadora.soma(10, 5)}`)
console.log(`10 - 5 = ${calculadora.subtracao(10, 5)}`)
console.log(`10 * 5 = ${calculadora.mult(10, 5)}`)
console.log(`10 / 5 = ${calculadora.div(10, 5)}`)