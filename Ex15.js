const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// for (i = 0; i < original.length; i++) {
//     original[i] % 2 === 0 ? pares.push(original[i]) : impares.push(original[i]);
// }
// console.log(pares);
// console.log(impares);

// for (numero of original) {
//     numero % 2 === 0 ? pares.push(numero) : impares.push(numero);
// }
// console.log(pares);
// console.log(impares);

let i = 0;
while (i < original.length) {
    original[i] % 2 === 0 ? pares.push(original[i]) : impares.push(original[i]);
    i++;
}
console.log(pares);
console.log(impares);