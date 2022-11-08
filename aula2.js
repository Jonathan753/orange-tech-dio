/* Faça um progrma para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
1 - Preço da gasolina;
2 - O tipo de combutível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;;
5 - Distância em KM da viagem;

Imprimir no console o valor que será gasto para realizar esta viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;
if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
