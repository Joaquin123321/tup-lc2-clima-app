const error = document.getElementById("parrafo4")
const enviar = document.getElementById("enviar")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const mensaje = document.getElementById("mensaje")

error.style.visibility = "hidden"

enviar.onclick = function (){

    if(nombre.value == "" || correo.value == "" || mensaje.value == ""){
        alert("Alguno de los campos se encuentra vacío")
        nombre.value = ""
        correo.value = ""
        mensaje.value = ""
    }
    
}