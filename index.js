// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "9999.99", "10.00"," Prueba1","Prueba2"];
let saldoTotal = 0;
 
 
console.log("Iniciando auditoría de transacciones...");
 
 
for (let i = 0; i <= transacciones.length; i++) {
    let transaccion = transacciones[i];
 
 
    // Bug 1: Controlar valores corruptos
    if (transaccion === "ERROR_RECHAZADO") {
        console.log("Transacción corrupta saltada.");
        // Falta algo aquí para saltar a la siguiente vuelta...
        continue;
    }
 
 
    // Bug 2: Detener operaciones sospechosas (Alerta de fraude si supera 5000)
    if (transaccion > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        // Falta algo aquí para abortar el bucle inmediatamente...
        break;
    }
    
     //EXTRA: Añadir un If que filtre las transacciones que no sean números y no las acumule al saldo total. Añadir dos transacciones más al array que sean Strings para probarlo. (+1 Pto extra - Máx 10 obviamente).
     if( Number(transaccion) !=NaN){
     
        // Bug 3: Coerción de tipos oculta
    saldoTotal += Number(transaccion); 
     }
     
     
}


console.log("Saldo total auditado: " + saldoTotal);
