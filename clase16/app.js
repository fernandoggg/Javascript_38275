let listaClientes = [];
const objCliente = {
    id: '',
    nombre: '',
    dni: ''
}

let editando = false;

const form = document.getElementById('form');
const nombreInput = document.getElementById('nombre');
const dniInput = document.getElementById('dni');
const btnAgregar = document.getElementById('btnAgregar');

form.addEventListener('submit', validarFormulario);

function validarFormulario(e){
   e.preventDefault();
   if(nombreInput.value === '' || dniInput.value === '') {
    alert("debe completar todos los campos");
    return;
   } 

   if(editando){
    editarCliente();
    editando = false;
   } else {
    objCliente.id = Date.now();
    objCliente.nombre = nombreInput.value;
    objCliente.dni = dniInput.value;

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
}   
function mostrarClientes(){
    clearScreen();
    const divClientes = document.getElementById('div-clientes');

    listaClientes.forEach(cliente =>{
        const {id, nombre, dni} = cliente;
        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${dni} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarCliente(cliente);
        editarBoton.textContent = 'Modificar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const borrarBoton = document.createElement('button');
        borrarBoton.onclick = () => borrarCliente(id);
        borrarBoton.textContent = 'borrar';
        borrarBoton.classList.add('btn', 'btn-borrar');
        parrafo.append(borrarBoton);

        const hr = document.createElement('hr')

        divClientes.appendChild(parrafo);
        divClientes.appendChild(hr);

    });
}
function cargarCliente(cliente){
    const {id, nombre, dni} = cliente;
    nombreInput.value = nombre;
    dniInput.value = dni;

    objCliente.id = id;

    form.querySelector('button[type="submit"]').textContent = 'Actualizar';
    editando = true;
}
function editarCliente(){
    objCliente.nombre = nombreInput.value;
    objCliente.dni = dniInput.value;

    listaClientes.map( cliente => {
        if(cliente.id === objCliente.id){
            // cliente.id = objCliente.id;
            cliente.nombre = objCliente.nombre;
            cliente.dni = objCliente.dni;
        }
    });
    clearScreen();
    mostrarClientes();
    form.reset();
    form.querySelector('button[type="submit"]').textContent = 'Agregar';
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