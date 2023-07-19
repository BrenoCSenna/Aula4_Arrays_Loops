const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComA = [];

for (const nome of nomes) {
    if (nome[0] === 'A' || nome[0] === 'a') {
        nomesComA.push(nome);
    }
}
console.log(nomesComA);
// for (let i = 0; i < nomes.length; i++) {
//     for (let letra = 0; letra < 1; letra++) {
//         if (letra[0] === 'A' || letra[0] === 'a') {
//             console.log(nomes[i]);
//         }
//     }

// }
