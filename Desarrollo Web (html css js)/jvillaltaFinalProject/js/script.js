const d = document;

function jsonGenerator() {
    let jsonObjet = {};
    let id = d.getElementById("id").value;
    let nombre = d.getElementById("nombre-completo").value;
    let nacionalidad = d.getElementById("nacionalidad").value;
    let correo = d.getElementById("correo").value;
    let fn = d.getElementById("fn").value;

    jsonObjet.id = id;
    jsonObjet.nombre = nombre;
    jsonObjet.nacionalidad = nacionalidad;
    jsonObjet.correo = correo;
    jsonObjet.fn = fn;
    console.log(jsonObjet);
    alert(`los siguientes datos se adjuntaron al objeto json:\n${jsonObjet.id}\n${jsonObjet.nombre}\n${jsonObjet.nacionalidad}\n${jsonObjet.correo}\n${jsonObjet.fn}\nverifique la salida en consola`)
    cleanForm();

}

function cleanForm() {
    d.getElementById("id").value = "";
    d.getElementById("nombre-completo").value = "";
    d.getElementById("nacionalidad").value = "";
    d.getElementById("correo").value = "";
    d.getElementById("fn").value = "";
}