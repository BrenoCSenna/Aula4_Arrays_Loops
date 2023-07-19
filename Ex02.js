const letras = ["A", "e", "B", "C", "E", "z"];
var letraE = 0;
var validacao = false;
for (let i = 0; i < letras.length; i++) {
    if (letras[i] === 'e' || letras[i] === 'E') {
        letraE++;
        validacao = true;
    }
}
if (!validacao) {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
}
else {
    console.log("Foram encontradas " + letraE + " letras 'E' ou 'e'.");

}