let suplementos = "\n 🔵 Proteína"+"\n 🔵 Creatina"+"\n 🔵 Pre Work"+"\n 🔵 Multivitaminico"+"\n 🔵 Quemador de grasa"
let iterar = false
let eleccion = ("")
let decision = ("")

do {let nombre = prompt("Hola... ¿Cual es tu nombre? 🤔")

    if (nombre === null) {console.error ("No escribió su nombre")
    break}

    else if (nombre === "") {nombre = prompt("No deje el campo vacío, ¿cual es su nombre?")}
    if (nombre === null) {console.error ("No escribió su nombre")}

    else if (nombre != "") {eleccion = prompt("¡Bienvenido "+ nombre +"! 👋"+" ¿Que suplemento estaba buscando?" + suplementos)}
    else if (nombre === "") {console.error("No escribió su nombre")}
    
    if (eleccion == "Proteína" || eleccion == "Creatina" || eleccion == "Pre Work" || eleccion == "Multivitaminico" ||
    eleccion == "Quemador de grasa") {decision = confirm  ("El precio es $80 USD\n¿Estas seguro de tu compra?")}
    
    if (decision == true) {console.log("✅ Compra realizada")}
    else if (decision == false){console.error("❌ Compra cancelada")}
    

}

while (iterar)