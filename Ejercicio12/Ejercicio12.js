"use script";

class Archivo {

    constructor(){
    }

    leerArchivoTexto(files) 
    { 
        var archivo = files[0];
        var nombre = document.getElementById("nombreArchivo");
        var tamaño = document.getElementById("tamañoArchivo");
        var tipo = document.getElementById("tipoArchivo");
        var ultima = document.getElementById("ultimaModificacion");
        var contenido = document.getElementById("contenidoArchivo");
        var areaVisualizacion = document.getElementById("areaTexto");
        var errorArchivo = document.getElementById("errorLectura");
        nombre.innerText = "Nombre del archivo: " + archivo.name;
        tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes"; 
        tipo.innerText = "Tipo del archivo: " + archivo.type;
        ultima.innerText = "Fecha de la última modificación: " + archivo.lastModifiedDate;
        contenido.innerText="Contenido del archivo de texto:"
        
        var tipoTexto = /text.*/;
        var tipoJSON = /text.json/;
        var tipoXML = /text.xml/;
    if (archivo.type.match(tipoTexto) || archivo.type.match(tipoJSON) || archivo.type.match(tipoXML)) 
       {
        var lector = new FileReader();
        lector.onload = function (evento) {
          //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
          //La propiedad "result" es donde se almacena el contenido del archivo
          //Esta propiedad solamente es válida cuando se termina la operación de lectura
          areaVisualizacion.innerText = lector.result;
          }      
        lector.readAsText(archivo);
        }
    else {
         errorArchivo.innerText = "Error al cargar el archivo";
        }       
};
}

const archivo = new Archivo();