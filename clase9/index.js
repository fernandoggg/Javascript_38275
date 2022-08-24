let formulario = document.getElementById("form")
formulario.addEventListener ("submit", datoform)
function datoform(e) {
   e.preventDefault();
   let dato = e.target
   alert(dato.children[0].value)
   alert(dato.children[1].value)
}