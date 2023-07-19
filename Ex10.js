const numeros = [8, 11, 4, 1];
let diferencaMaior = 0; let maior = 0; let menor = 90;

for (let i = 0; i < numeros.length; i++) {
    numeros[i] > maior ? maior = numeros[i] : null;
    numeros[i] < menor ? menor = numeros[i] : null;
}
diferencaMaior = maior - menor;
console.log(diferencaMaior);