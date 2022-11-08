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

if(formaDePagamento === 'Débito'){
    const pagamento = precoDaEtiqueta - precoDaEtiqueta*0.1;
    console.log(pagamento.toFixed(2));
}else if(formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
    const pagamento = precoDaEtiqueta - precoDaEtiqueta*0.15;
    console.log(pagamento.toFixed(2));
}else if(formaDePagamento === 'Duas vezes') {
    const pagamento = precoDaEtiqueta;
    console.log(pagamento.toFixed(2));
}else {
    const pagamento = precoDaEtiqueta + precoDaEtiqueta*0.10;
    console.log(pagamento.toFixed(2));
}