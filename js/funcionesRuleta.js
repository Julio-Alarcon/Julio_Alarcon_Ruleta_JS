function mostrarMenu() {
    let opcion = "";
    while (opcion !== "0") {
        opcion = prompt("--- Menú de opciones ---\nFichas disponibles: " + fichasDisponibles + "\n\n1: Empezar\n2: Apostar por color\n3: Apostar por número (en mantenimiento)\n4: Apostar por doces\n5: Apostar por mitad\n6: Ver apuestas realizadas\n0: Salir\n\nIngrese el número de la opción que desea:");
        // Posible mejora usando "case"
        if (opcion === null) {
            console.log("El usuario ha cerrado el cuadro de diálogo.");
            return;
        } else if (opcion === "0") {
            console.log("Operación cancelada.");
        } else if (opcion === "1") {
            empezar();
        } else if (opcion === "2") {
            apostarPorColor();
        } else if (opcion === "3") {
            apostarPorNumero();
        } else if (opcion === "4") {
            apostarPorDoces();
        } else if (opcion === "5") {
            apostarMitad();
        } else if (opcion === "6") {
            verApuestas();
        } else {
            console.log("Opción inválida. Por favor, ingrese una opción válida.");
            alert("Opción inválida. Por favor, ingrese una opción válida.");
        }
    }
}

function empezar() {
    let numeroGanador = Math.floor(Math.random() * 37);
    let colorGanador = Math.floor(Math.random() * 2);
    if (colorGanador === 0) {
        colorGanador = 'negro';
    } else {
        colorGanador = 'rojo';
    }
    comprobarApuestas(numeroGanador, colorGanador);
}

function comprobarApuestas(numeroGanador, colorGanador){
    let ganancias = 0;
    let mensaje = "El número ganador es " + numeroGanador + " de color " + colorGanador + ".\n";
    if (numeroGanador >= 1 && numeroGanador <= 18) {
        ganancias += mitad1 * 2;
        mensaje += "\nHa ganado " + mitad1 + " fichas por apostar a la mitad 1-18.";
    } else if (numeroGanador >= 19 && numeroGanador <= 36) {
        ganancias += mitad2 * 2;
        mensaje += "\nHa ganado " + mitad2 * 2 + " fichas por apostar a la mitad 19-36.";
    }
    if (colorGanador === "rojo") {
        ganancias += rojo * 2;
        mensaje += "\nHa ganado " + rojo * 2 + " fichas por apostar al color rojo.";
    } else if (colorGanador === "negro") {
        ganancias += negro * 2;
        mensaje += "\nHa ganado " + negro * 2 + " fichas por apostar al color negro.";
    }
    if (numeroGanador % 2 === 0) {
        ganancias += par * 2;
        mensaje += "\nHa ganado " + par * 2 + " fichas por apostar a los números pares.";
    } else {
        ganancias += impar * 2;
        mensaje += "\nHa ganado " + impar * 2 + " fichas por apostar a los números impares.";
    }
    if (numeroGanador >= 1 && numeroGanador <= 12) {
        ganancias += doce1 * 3;
        mensaje += "\nHa ganado " + doce1 * 3 + " fichas por apostar al primer 12.";
    } else if (numeroGanador >= 13 && numeroGanador <= 24) {
        ganancias += doce2 * 3;
        mensaje += "\nHa ganado " + doce2 * 3 + " fichas por apostar al segundo 12.";
    } else if (numeroGanador >= 25 && numeroGanador <= 36) {
        ganancias += doce3 * 3;
        mensaje += "\nHa ganado " + doce3 * 3 + " fichas por apostar al tercer 12.";
    }
    reiniciarApuestas()
    
    fichasDisponibles += ganancias;
    mensaje += "\n\nGanacia Total: " + ganancias + "\nFichas Totales: " + fichasDisponibles + "\n";
    console.log(mensaje);
    alert(mensaje);
}

function reiniciarApuestas(){
    rojo = 0;
    negro = 0;
    par = 0;
    impar = 0;
    mitad1 = 0;
    mitad2 = 0;
    doce1 = 0;
    doce2 = 0;
    doce3 = 0;
}


function apostarPorColor() {
    let color = "";
    let opcionValida = false;
    let cantidad = 0;
    while (!opcionValida) {
        color = prompt("Ingrese el color por el que desea apostar\n1: para rojo\n2: para negro\n0. para volver al menu");
        if (color === "1") {
            console.log("Apostando por el color rojo.");
            cantidad = parseInt(prompt("Ingrese la cantidad que desea apostar por el color rojo\nFichas disponibles: " + fichasDisponibles + ":"));
            if (isNaN(cantidad) || cantidad < apuestaMinima || cantidad > fichasDisponibles) {
                console.log("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
                alert("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
            } else {
                fichasDisponibles -= cantidad;
                rojo += cantidad;
                console.log("Ha apostado " + cantidad + " fichas por el color rojo.");
                alert("Ha apostado " + cantidad + " fichas por el color rojo.");
                opcionValida = true;
            }
        } else if (color === "2") {
            console.log("Apostando por el color negro.");
            cantidad = parseInt(prompt("Ingrese la cantidad que desea apostar por el color negro (Fichas disponibles: " + fichasDisponibles + "):"));
            if (isNaN(cantidad) || cantidad < apuestaMinima || cantidad > fichasDisponibles) {
                console.log("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
                alert("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
            } else {
                fichasDisponibles -= cantidad;
                negro += cantidad;
                console.log("Ha apostado " + cantidad + " fichas por el color negro.");
                alert("Ha apostado " + cantidad + " fichas por el color negro.");
                opcionValida = true;
            }
        } else if (color === "0") {
            console.log("Ha decidido volver al menú.");
            alert("Ha decidido volver al menú.");
            return;
        } else {
            console.log("Opción inválida. Por favor, ingrese una opción válida.");
            alert("Opción inválida. Por favor, ingrese una opción válida.");
        }
    }
}

function apostarPorNumero() {
    alert("Mantenimiento. Opcion aún no disponible, para esta opcion necesito disponibilidad del uso de arrays, diccionarios y objetos.");
    console.log("Mantenimiento. Opcion aún no disponible, para esta opcion necesito disponibilidad del uso de arrays, diccionarios y objetos.");
    /*
    ⠀⠀⠀⠀⠈⠢⢄⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀ ⠀⠀⣀⠴⠊
    ⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠤⠄⠒⠈
    ⠀⠀⠀⠀⠀⠀⠀⠘⣀⠄⠊⠁
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠒⠒⠒⠒⠒⠢⠤
    ⠀⠀⠀⠀⠀⠀⠀⡰⠉⠁⠀⠀⠀ ⠀⠀⠀⠀⠀ ⠀⠈⠑⢄
    ⠀⠀⠀⠀⠀⠀⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀ ⠀⠀⠀ ⠀⠙⠄
    ⠀⠀⠀⠀⠀⢀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⢠⠂⠀⠀⠘⡄
    ⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠈⢤⡀⢂⠀⢨⠀⢀⡠⠈⢣
    ⠀⠀⠀⠀⠀⢀⢀⡖⠒⠶⠤⠭⢽⣟⣗⠲⠖⠺⣖⣴⣆⡤⠤⠤⠼⡄
    ⠀⠀⠀⠀⠀⠘⡈⠃⠀⠀⠀⠘⣺⡟⢻⠻⡆⠀⡏⠀⡸⣿⢿⢞⠄⡇
    ⠀⠀⠀⠀⠀⠀⢣⡀⠤⡀⡀⡔⠉⣏⡿⠛⠓⠊⠁⠀⢎⠛⡗⡗⢳⡏
    ⠀⠀⠀⠀⠀⠀⠀⢱⠀⠨⡇⠃⠀⢻⠁⡔⢡⠒⢀⠀⠀⡅⢹⣿⢨⠇
    ⠀⠀⠀⠀⠀⠀⠀⢸⠀⠠⢼⠀⠀⡎⡜⠒⢀⠭⡖⡤⢭⣱⢸⢙⠆
    ⠀⠀⠀⠀⠀⠀⠀⡸⠀⠀⠸⢁⡀⠿⠈⠂⣿⣿⣿⣿⣿⡏⡍⡏
    ⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠸⢢⣫⢀⠘⣿⣿⡿⠏⣼⡏
    ⠀⠀⠀⠀⣀⣠⠊⠀⠀⠀⠀ ⠀⠀⠀⠀⠙⠳⢴⡦⡴⢶⣞⣁⣀
    ⠀⠐⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉
    */
}

function apostarPorDoces() {
    let doce = "";
    let opcionValida = false;
    let cantidad = 0;
    while (!opcionValida) {
        doce = prompt("Ingrese el doce por el que desea apostar\n\n1: Primeros 12\n2: Segundos 12\n3: Terceros 12\n0. para volver al menu");
        if (doce === null) {
            console.log("El usuario ha cerrado el cuadro de diálogo.");
            return;
        } else if (doce === "1") {
            console.log("Apostando por el Primer 12:");
            cantidad = parseInt(prompt("Ingrese la cantidad que desea apostar por el Primer 12\nFichas disponibles: " + fichasDisponibles));
            if (isNaN(cantidad) || cantidad < apuestaMinima || cantidad > fichasDisponibles) {
                console.log("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
                alert("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
            } else {
                fichasDisponibles -= cantidad;
                doce1 += cantidad;
                console.log("Ha apostado " + cantidad + " fichas por el Primer 12:");
                alert("Ha apostado " + cantidad + " fichas por el Primer 12:");
                opcionValida = true;
            }
        } else if (doce === "2") {
            console.log("Apostando por el Segundo 12.");
            cantidad = parseInt(prompt("Ingrese la cantidad que desea apostar por el Segundo 12\nFichas disponibles: " + fichasDisponibles));
            if (isNaN(cantidad) || cantidad < apuestaMinima || cantidad > fichasDisponibles) {
                console.log("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
                alert("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
            } else {
                fichasDisponibles -= cantidad;
                doce2 += cantidad;
                console.log("Ha apostado " + cantidad + " fichas por el Segundo 12.");
                alert("Ha apostado " + cantidad + " fichas por el Segundo 12.");
                opcionValida = true;
            }
        } else if (doce === "3") {
            console.log("Apostando por el Tercer 12.");
            cantidad = parseInt(prompt("Ingrese la cantidad que desea apostar por el Tercer 12\nFichas disponibles: " + fichasDisponibles));
            if (isNaN(cantidad) || cantidad < apuestaMinima || cantidad > fichasDisponibles) {
                console.log("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
                alert("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
            } else {
                fichasDisponibles -= cantidad;
                doce3 += cantidad;
                console.log("Ha apostado " + cantidad + " fichas por el Tercer 12.");
                alert("Ha apostado " + cantidad + " fichas por el Tercer 12.");
                opcionValida = true;
            }
        } else if (doce === "0") {
            /*Yuly@Al@rk@n*/
            console.log("Ha decidido volver al menú.");
            alert("Ha decidido volver al menú.");
            return;
        } else {
            console.log("Opción inválida. Por favor, ingrese una opción válida.");
            alert("Opción inválida. Por favor, ingrese una opción válida.");
        }
    }
}

function apostarMitad() {
    let mitad;
    let cantidad = 0;
    let opcionValida = false;
    while (!opcionValida) {
        mitad = prompt("Ingrese el número correspondiente a la mitad de la tabla en la que desea apostar\n\n1: para la mitad 1 a 18\n2: para la mitad 19 a 36\n0. para volver al menu");
        if (mitad === "1" || mitad === "2") {
            console.log("Apostando por la mitad " + mitad + ".");
            cantidad = parseInt(prompt("Ingrese la cantidad que desea apostar por la mitad " + mitad + " Fichas disponibles: " + fichasDisponibles));
            if (isNaN(cantidad) || cantidad < apuestaMinima || cantidad > fichasDisponibles) {
                console.log("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
                alert("Cantidad inválida. Debe ingresar un número entre " + apuestaMinima + " y " + fichasDisponibles + ".");
            } else {
                fichasDisponibles -= cantidad;
                if (mitad === "1") {
                    mitad1 += cantidad;
                    console.log("Ha apostado " + cantidad + " fichas por la mitad 1 a 18.");
                    alert("Ha apostado " + cantidad + " fichas por la mitad 1 a 18.");
                } else {
                    mitad2 += cantidad;
                    console.log("Ha apostado " + cantidad + " fichas por la mitad 19 a 36.");
                    alert("Ha apostado " + cantidad + " fichas por la mitad 19 a 36.");
                }
                opcionValida = true;
            }
        } else if (mitad === "0") {
            console.log("Ha decidido volver al menú.");
            alert("Ha decidido volver al menú.");
            return;
        } else {
            console.log("Opción inválida. Debe ingresar 1 o 2.");
            alert("Opción inválida. Debe ingresar 1 o 2.");
        }
    }
}


function verApuestas() {
    let mensajeAlert = "Apuestas realizadas:";
    let apuestaTotal = 0;
    console.log("Apuestas realizadas:");
    if (rojo > 0) {
        console.log("Rojo: " + rojo);
        mensajeAlert += "\nRojo: " + rojo;
        apuestaTotal += rojo;
    }
    if (negro > 0) {
        console.log("Negro: " + negro);
        mensajeAlert += "\nNegro: " + negro;
        apuestaTotal += negro;
    }
    if (par > 0) {
        console.log("Par: " + par);
        mensajeAlert += "\nPar: " + par;
        apuestaTotal += par;
    }
    if (impar > 0) {
        console.log("Impar: " + impar);
        mensajeAlert += "\nImpar: " + impar;
        apuestaTotal += impar;
    }
    if (doce1 > 0) {
        console.log("Primeros 12: " + doce1);
        mensajeAlert += "\nPrimeros 12: " + doce1;
        apuestaTotal += doce1;
    }
    if (doce2 > 0) {
        console.log("Segundos 12: " + doce2);
        mensajeAlert += "\nSegundos 12: " + doce2;
        apuestaTotal += doce2;
    }
    if (doce3 > 0) {
        console.log("Terceros 12: " + doce3);
        mensajeAlert += "\nTerceros 12: " + doce3;
        apuestaTotal += doce3;
    }
    if (mitad1 > 0) {
        console.log("Primera mitad: " + mitad1);
        mensajeAlert += "\nPrimera mitad: " + mitad1;
        apuestaTotal += mitad1;
    }
    if (mitad2 > 0) {
        console.log("Segunda mitad: " + mitad2);
        mensajeAlert += "\nSegunda mitad: " + mitad2;
        apuestaTotal += mitad2;
    }
    if (mensajeAlert === "Apuestas realizadas:") {
        mensajeAlert += "\nNo has realizado ninguna apuesta";
    } else {
        mensajeAlert += "\n\nTotal de la apuesta: " + apuestaTotal;
    }
    alert(mensajeAlert);
}
