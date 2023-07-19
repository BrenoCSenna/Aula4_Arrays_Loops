const numeros = [3, 4, 1, 8, 11, 7, 5];
let maior = 0;

for (let i = 0; i < numeros.length; i++) {
    numeros[i] > maior ? (maior = numeros[i]) : null;
    //     if (numeros[i] > maior) {
    //         maior = numeros[i];
    //     }
}
console.log(maior);