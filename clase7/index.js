while (confirm("quiere realizar una carga?")) {
class Cliente{
constructor(nombre, dni, tel){
   this.nombre = nombre.toUpperCase();
   this.dni = Number(dni);
   this.tel = Number(tel);
}
}
const clientes = [];

let nombre = prompt("ingrese el nombre del cliente")
let dni = prompt("ingrese el dni del cliente")
let tel = prompt("ingrese el telefono del cliente")

clientes.push(new Cliente(nombre, dni, tel));

for (const element of clientes) {
   console.log(element.nombre)
   console.log(element.dni)
   console.log(element.tel)
}
}
