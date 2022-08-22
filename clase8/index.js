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
   //agrega a traves del input del usuario una lista de clientes
   let p = document.createElement("p")
   p.innerHTML = `<p>${element.nombre}</p>`
   document.body.append(p)
}
}

let titulo = document.getElementById("titulo")
// comprobar si esta vacio
console.log(titulo.innerHTML)
//cargar un texto en el elemento de html con el id titulo
titulo.innerHTML = "Lista de CLientes"