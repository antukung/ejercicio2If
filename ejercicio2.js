const VALOR_CONVERSION_ETH =13.54;
const VALOR_CONVERSION_DOLAR =39685.40;

let cantidadBitcoinIngresado= prompt("dime la cantidad de Bitcoin a dolar");
let conversioPosible= confirm ("si es positivo se convierte a ETH si es negativo a dolar")

if (conversioPosible) {
    alert((VALOR_CONVERSION_ETH*cantidadBitcoinIngresado)+" cantidad de ETH que tenes")
} else {
    alert ((VALOR_CONVERSION_DOLAR*cantidadBitcoinIngresado)+" cantidad de dolares que tenes ")
}