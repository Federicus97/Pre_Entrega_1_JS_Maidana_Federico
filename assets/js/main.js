/* Declaracion de variables */
/* valores asignados el 29/12 */
let pesos;
let total;
const dolar = 0.0057;
const libra = 0.0047;
const euro = 0.0053;

let divisa = prompt("Eliga una divisa para comenzar: dolar, libra, euro u ESC para salir");
//Repetimos hasta que se ingresa "ESC"
while(divisa != "ESC" ){
   switch (divisa) {
       case "dolar":
            pesos = prompt('Ingrese la cantidad de pesos a convertir a dolar');
            total = (pesos * dolar)
            alert('El resultado es '+ total + ' Dolares');
            break;
        case "libra":
            pesos = prompt('Ingrese la cantidad de pesos a convertir a libra');
            total = pesos * libra
            alert('El resultado es '+ total + ' Libras');
            break;
        case "euro":
            pesos = prompt('Ingrese la cantidad de pesos a convertir a euro');
            total = pesos * euro
            alert('El resultado es '+ total + ' Euros');
            break;
       default:
           alert("valor no valido, porfavor ingrese nuevamente");
           break;
   }
   divisa = prompt("Eliga una divisa para comenzar: dolar, libra, euro u ESC para salir");
}