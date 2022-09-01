   class Cliente{
   constructor(nombre, dni, tel){
      this.nombre = nombre.toUpperCase();
      this.dni = Number(dni);
      this.tel = Number(tel);
   }
   }
   const clientes = [];
   
   // Defino DOM
   let form = document.getElementById("form")
   let inputNom = document.getElementById("inombre")
   let mostrarUltCliente = document.getElementById("mostrarUltCliente")
   let mostrarCliente = document.getElementById("mostrarClientes")
   let btnMostrarClientes = document.getElementById("btnMostrar")
   let bandera = false
      // defino hijos de form
   let inombre = form.children[1].value;
   let idni = form.children[3].value;
   let itel = form.children[5].value;
   // Defino eventos
   form.addEventListener("submit", agregarCliente)
   btnMostrarClientes.addEventListener("click", mostrarTodosClientes)
   // Funciones
      // Focus en el input
      inputNom.focus()
      // comprobar el ingreso de datos
      function validarDatos(){
         inombre = form.children[1].value;
         idni = form.children[3].value;
         itel = form.children[5].value;
         localStorage.setItem('Nombre y apellido:', inombre)
         localStorage.setItem('DNI:', idni)
         localStorage.setItem('Tel:', itel)
         if(inombre == "" || idni == "" || itel == ""){
            alert("Error debe completar todos los campos")
            inputNom.focus()
            bandera = false
         }else {
            bandera = true
         }
      }
      //agregar clientes al array
      function agregarCliente(e){
         //cancelamos comportamiento del evento
         e.preventDefault()
         validarDatos()
         if(bandera == true){
            let opcion = confirm("Estas seguro de agregar el cliente?")
            if(opcion == true){
               // captura el dato del input en formato objeto del DOM
               let datos = e.target
               //enviamos los datos al array
               clientes.push(new Cliente(inombre, idni, itel));
            } else {
               alert("no se agregara el cliente")
            }

            //traer el innerHtml
            mostrarCliente.innerHTML = ""
            //agregar la funcion que muestra en el DOM
            mostrarUlt()
            //obtenemos el primer dato
         } else {
            inputNom.focus
         }
  

      }
   // Funcion para mostrar en DOM el ultimo cliente ingresado
   const mostrarUlt = () =>{
      mostrarUltCliente.innerHTML = `
      <h3>Ultimo cliente ingresado</h3>
      <p><strong>Nombre y Apellido: </strong>${inombre}</p>
      <p><strong>Documento de identidad: </strong>${idni}</p>
      <p><strong>Telefono: </strong>${itel}</p>`
   }
   // funcion para mostrar todos los clientes
function mostrarTodosClientes (e){
   e.preventDefault();
   mostrarCliente.innerHTML = '<h3>Listado de clientes</h3>';
   for(const datos of clientes){
      mostrarCliente.innerHTML = `
      <p><strong>Nombre y Apellido: </strong>${datos.nombre}</p>
      <p><strong>Documento de identidad: </strong>${datos.dni}</p>
      <p><strong>Telefono: </strong>${datos.tel}</p>
      `
}

}