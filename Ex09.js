const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];
let i = 14;
let opcao = 'add';

switch (opcao) {
    case 'add':
        i++;
        filaDePedidos.push("pedido " + i);
        //console.log(filaDePedidos);
        opcao = 'remove';

    case 'remove':
        filaDePedidos.shift();
        console.log(filaDePedidos);
        return;
}