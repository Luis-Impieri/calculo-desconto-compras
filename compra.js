const preco = 100
let pagamento = 'pix'
let parcela = 1

if (pagamento === 'debito' && parcela === 1) {
    console.log(preco - preco / 10)
} else if (pagamento === 'pix' && parcela === 1) {
    console.log(preco - preco * 0.15)
} else if (pagamento === 'debito' && parcela === 2) {
    console.log(preco)
}else if (pagamento === 'debito' && parcela > 2) {
    console.log(preco + preco / 10)
} else {
    console.log('Escolha um método de pagamento válido')
}