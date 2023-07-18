//Criar um array com 5 nomes de países
var paises = ['Brasil', 'Argentina', 'Inglaterra', 'França', 'Estados Unidos'];

//Adicionar um país ao fim da lista
paises.push('Itália');
console.log(paises);

//Remover um país ao fim da lista
paises.pop();
console.log(paises);

//Adicionar um país ao início da lista
paises.unshift('Uruguai');
console.log(paises);

//Remover um país ao início da lista
paises.shift();
console.log(paises);

//Imprimir o último país da lista
console.log(paises[paises.length - 1]);

//Imprimir o país de índice 2 da lista
console.log(paises[2]);
