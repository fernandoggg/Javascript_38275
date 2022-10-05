let listaClientes = [];
const objCliente = {
    id: '',
    nombre: '',
    dni: '',
    tel: ''
}

let editando = false;

const form = document.getElementById('form');
const nombreInput = document.getElementById('nombre');
const dniInput = document.getElementById('dni');
const telInput = document.getElementById('tel');
const btnAgregar = document.getElementById('btnAgregar');

form.addEventListener('submit', validarFormulario);

function validarFormulario(e){
   e.preventDefault();
   if(nombreInput.value === '' || dniInput.value === '' || telInput.value === '') {
     swal({
         title: "Error debe completar todos los campos",
         text: "Haga click para volver a completar",
         icon: "error",
       });
    return;
   } 

   if(editando){
    editarCliente();
    editando = false;
   } else {
    objCliente.id = Date.now();
    objCliente.nombre = nombreInput.value;
    objCliente.dni = dniInput.value;
    objCliente.tel = telInput.value;
    localStorage.setItem('Nombre y apellido:', objCliente.nombre)
    localStorage.setItem('DNI:', objCliente.dni)
    localStorage.setItem('Tel:', objCliente.tel)

    agregarCliente();
   }
}
function agregarCliente(){
    listaClientes.push({...objCliente})
    mostrarClientes();
    form.reset();
    wipeBox();
}
function wipeBox(){
    objCliente.id = "";
    objCliente.nombre = "";
    objCliente.dni = "";
    objCliente.tel = "";
}   
function mostrarClientes(){
    clearScreen();
    const divClientes = document.getElementById('div-clientes');

    listaClientes.forEach(cliente =>{
        const {id, nombre, dni, tel} = cliente;
        const parrafo = document.createElement('p');
        parrafo.innerHTML = ` Name: ${nombre}, DNI: ${dni}, Tel: ${tel} . `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarCliente(cliente);
        editarBoton.innerHTML = 'Modificar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const borrarBoton = document.createElement('button');
        borrarBoton.onclick = () => borrarCliente(id);
        borrarBoton.innerHTML = 'borrar';
        borrarBoton.classList.add('btn', 'btn-borrar');
        parrafo.append(borrarBoton);

        const hr = document.createElement('hr')

        divClientes.appendChild(parrafo);
        divClientes.appendChild(hr);

    });
}
function cargarCliente(cliente){
    const {id, nombre, dni, tel} = cliente;
    nombreInput.value = nombre;
    dniInput.value = dni;
    telInput.value = tel;

    objCliente.id = id;

    form.querySelector('button[type="submit"]').innerHTML = 'Actualizar';
    editando = true;
}
function editarCliente(){
    objCliente.nombre = nombreInput.value;
    objCliente.dni = dniInput.value;
    objCliente.tel = telInput.value;

    listaClientes.map( cliente => {
        if(cliente.id === objCliente.id){
            // cliente.id = objCliente.id;
            cliente.nombre = objCliente.nombre;
            cliente.dni = objCliente.dni;
            cliente.tel = objCliente.tel;
        }
    });
    clearScreen();
    mostrarClientes();
    form.reset();
    form.querySelector('button[type="submit"]').innerHTML = 'Agregar';
    editando = false;
}

function borrarCliente(id){
    listaClientes = listaClientes.filter(cliente => cliente.id !== id);
    clearScreen();
    mostrarClientes();
}
function clearScreen() {
    const divClientes = document.getElementById('div-clientes');
    while(divClientes.firstChild){
        divClientes.removeChild(divClientes.firstChild);
    }
}