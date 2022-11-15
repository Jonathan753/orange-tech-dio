/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando 
    o preço normal de etiqueta e a escolha de condição de pagamento.
    Utilizando os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
    o calculo adequado.

    Código Condição de pagemento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    - Em duas vezes, o preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const precoDaEtiqueta = 100;
const formaDePagamento = 'Pix';

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)));
} 

if(formaDePagamento === 'Débito'){
    console.log(aplicarDesconto(precoDaEtiqueta, 10));
}else if(formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
    console.log(aplicarDesconto(precoDaEtiqueta, 15));
}else if(formaDePagamento === 'Duas vezes') {
    console.log(aplicarDesconto(precoDaEtiqueta, 0));
}else {
    console.log(aplicarJuros(precoDaEtiqueta, 10));
}