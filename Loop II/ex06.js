const clientes = ["João", "Daniel", "Larissa", "Mariana", "Julia", "Luana", "Gustavo", "Luiz"]
const produtos = ["molho de tomate", "cenoura", "macarrão", "salame", "lâmpada", "água sanitária", "refrigerante", "suco"]

for (let i = 0; i < clientes.length; i++) {
    console.log(`O cliente ${clientes[i]} comprou ${produtos[i]}.`)
}