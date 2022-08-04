//confirmacion para correr el algoritmo o no
while (confirm("quiere realizar una operación?")) {

    //CALCULADORA CON FUNCIONES SIMPLES (SUMA, RESTA, MULTIPLICACION, DIVISION, POTENCIA Y RAIZ)
 function calculadora(numero1, numero2, operador){
    switch (operador) {
       case "+":
            return alert(numero1  + numero2);

       case "-":
                return alert(numero1  - numero2);

       case "*":
                return alert(numero1  * numero2);

        case "/":
                return alert(numero1  / numero2);

        case ".":
                return alert(Math.pow(numero1, numero2));

        case ",":
                return alert((Math.pow(numero1, (1 / numero2))).toFixed(2));

       default:
           alert("El operador ingresado no es valido, vuelva a intentar")
           break;
    }
   }

let valor1 = Number(prompt("Ingresa el primer valor de tu operacion"))
let valor2 = Number(prompt("Ingresa el segundo valor de tu operacion"))
let operacion = prompt("Ingresa el operador Matematico a utilizar: \n1. + \n2. - \n3. * \n4. / \n5. . (potencia) \n6. , (raiz)")

calculadora(valor1, valor2, operacion)

}








