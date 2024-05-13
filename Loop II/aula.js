for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log('Passei por uma iteração');
}

let minha_lista = ['abóbora', 'morango', 'limão', 'laranja', 'abacate'];

for (let index = 0; index < minha_lista.length; index++) {
    console.log(minha_lista[index])
}

// Loop para índices

for (const indice in minha_lista) {
    console.log(indice)
}

minha_lista = ['abóbora', 'morango', 'limão', 'laranja', 'abacate', 'tomate', 'abacaxi'];

for (const alimento of minha_lista) {
    console.log(alimento)
}