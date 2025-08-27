let numMax = 10; 
let numSecreto = 0;
let intentos = 0; //Se inicializa en 1 pq al menos una vez lo intentara
let listaNumAnteriores = [];

//console.log(numSecreto); //Para visualizar rapidamente la consola en el navegador se puede abrir con F12

condicionesIniciales(); //Esta linea se ejecuta cada que abrimos la pagina :)

//Forma tracidicional de crear una funcion
function verificarIntento(){
    //Para capturar input
    let numUsuario = parseInt(document.getElementById('valorUsuario').value); //Primero se convierte a numero
   // console.log(intentos);
    //Para dar pistas al usuario
    if (numUsuario === numSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento." : "intentos."}`);

        //Para habilitar boton de Nuevo Juego
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numUsuario > numSecreto){
            asignarTextoElemento('p', "El numero secreto es menor");
        } else{
            asignarTextoElemento('p', "El numero secreto es mayor");
        }
        intentos ++;
        limpiarInput();
    }

    return;
}

function limpiarInput(){
   document.querySelector("#valorUsuario").value = "";

   return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumSecretos() {
    let numGenerado = Math.floor(Math.random() * numMax) + 1;
    
    console.log(`Nuevo numero generado: ${numGenerado}`);
    console.log(listaNumAnteriores);
    if (listaNumAnteriores.length == numMax){
        asignarTextoElemento('p', "Ya se sortearon todos los numeros posibles");
    }else {
        //Si el numero generado esta dentro de la lista 
        if (listaNumAnteriores.includes(numGenerado)){
            //Recursividad: La funcion en la que estamos vuelve a llamasre a si misma para volver a ejecutarse
            return generarNumSecretos();
        }else{
            listaNumAnteriores.push(numGenerado);
            return numGenerado;
        }
    }
}
    

function condicionesIniciales(){
    //Se hizo esta nueva funcion para que se ponga cada que iniciemos un nuevo juego
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numMax}`);

    intentos = 1;

    numSecreto = generarNumSecretos();
    //console.clear();
    //console.log(`Numero secreto: ${numSecreto}`);
}



function reiniciarJuego(){
    //Limpiar la caja
    limpiarInput(); //Solo debemos llamar a la funcion creada anteriormente.

    //Volver a poner el mensaje de en que intervalo de numeros estaremos trabajando
    //Indicar el intervalo de numeros con los que se puede jugar
    //Inicializar el numero de intentos
    condicionesIniciales();


    //Deshabilitar el boton de Nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled', 'true');
   }
