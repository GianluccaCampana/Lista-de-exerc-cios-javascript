var prompt = require('prompt-sync')();

let calculadora = {
    soma: (a, b) => (a + b),
    subtracao: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b
}

do {
 
    console.log('\n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Sair\n');
    var calc = prompt();

    if (calc == 1) {
        let a = prompt('Digite o valor de A: ')
        let b = prompt('Digite o valor de B: ')
        console.log(`Soma = ${calculadora.soma(parseInt(a), parseInt(b))}\n`)
    }

    else if (calc == 2) {
        let a = prompt('Digite o valor de A: ')
        let b = prompt('Digite o valor de B: ')
        console.log(`Subtração = ${calculadora.subtracao(parseInt(a), parseInt(b))}\n`)
    }

    else if (calc == 3) {
        let a = prompt('Digite o valor de A: ')
        let b = prompt('Digite o valor de B: ')
        console.log(`Multiplicação = ${calculadora.mult(parseInt(a), parseInt(b))}\n`)
    }

    else if (calc == 4) {
        let a = prompt('Digite o valor de A: ')
        let b = prompt('Digite o valor de B: ')
        console.log(`Divisão = ${calculadora.div(parseInt(a), parseInt(b))}\n`)
    }

    else if (calc == 5) {
        console.log(`Sair\n\n`)
    }

    else (console.log(`Opção inválida\n`))

}
while (calc != 5)
