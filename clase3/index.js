//Explicacion del simulador.
alert("Simulador de dieta\nEn este programa vamos a calcular como cambia nuestro indice de masa corporal si bajamos un kg por semana haciendo dieta.\nVamos a necesitar saber cuanto pesamos actualmente, cuanto medimos y durante cuantos dias vamos a hacer la dieta.\n\nPulsa aceptar para comenzar! ")

// la variable d es la cantidad veces en la que se va a iterar
let d = Number(prompt("Ingrese la cantidad de semanas que va a realizar la dieta"));
// la variable p es el numero al que se le va a restar en cada iteracion
let p = Number(prompt("Ingrese su peso inicial"));
// la variable a es el numero con el que se va a calcular el imc
let a = Number(prompt("Ingrese su altura en metros, utilizando un punto para separar los decimales"));

if ((d != 0) && (p != 0) && (a != 0)){

// for resta un kg(p) por semana
    for (let i = 0; i <= d; i++) {
        let resultado = p--;
// calculo de imc peso / (Altura)²
        let imc = resultado / (Math.pow(a, 2));
// formatear dos decimales 
        imc = imc.toFixed(2)
            if (imc >= 30) {
                 alert ("Su peso sera: " + resultado + " y su indice de masa corporal es " + imc + " su composicion corporal es Obesidad, debe seguir la dieta") 
            }
            if ((imc < 30) && (imc >= 25 )) {
                alert ("Su peso sera: " + resultado + " y su indice de masa corporal es " + imc + " su composicion corporal es superior al normal, debe seguir la dieta") 
            }
            if ((imc < 25) && (imc >= 18.5)) {
                alert ("Su peso sera: " + resultado + " y su indice de masa corporal es " + imc + " su composicion corporal es normal, debe pausar la dieta") 
            }
            if (imc < 18.5) {
                alert ("Su peso sera: " + resultado + " y su indice de masa corporal es " + imc + " su composicion corporal es inferior al normal, debe aumentar su masa corporal") 
            }
    }
} 
else {
    alert ("error, no ingreso correctamente los datos")
}








