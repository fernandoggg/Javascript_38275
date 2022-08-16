//alta baja y modificacion de clientes
while (confirm("quiere realizar una carga?")) {

   let entradaDeClientes = prompt("ingresa el nombre del cliente")

   const clientes = [];

   while (entradaDeClientes != "ESC"){
    clientes.push(entradaDeClientes)
    entradaDeClientes = prompt("ingresa el nombre de otro cliente o ingresa ESC para salir")
   }
 for (const element of clientes) {
    alert("el cliente ingresado es: " + element )
    
 }


}
