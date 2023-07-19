const numeros = [54, 22, 14, 0, 284];
let num10 = -1;

for (let i = 0; i < numeros.length; i++) {
    numeros[i] === 10 ? (num10 = i) : null;
}
console.log(num10);