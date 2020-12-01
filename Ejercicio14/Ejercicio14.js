"use script";

function loader()
{
var canvas = document.getElementById('canvas');
var canvas1 = canvas.getContext('2d');


canvas1.fillStyle = "rgba(10, 90, 2, 1)";
canvas1.fillRect(30, 30, 800, 300);



canvas1.font = 'italic 40px sans-serif';
canvas1.strokeStyle = "rgba(255, 0, 0, 1)";
}


class ApiFile {
    constructor() {
        const header = $('#header');
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            header.append("<h2>Este navegador soporta el API File </h2>");
        } else {
            const body = $('#body');
            body.empty();
            header.append("<h2>Este navegador soporta el API File </h2>");
        }
        this.files = [];
    }

    processFiles() {
        this.files = $('#files')[0].files;
        $('#resultado').empty();
        this.showNumberFiles();
        this.calculateSize();
        this.showListFiles();
    }

    showNumberFiles() {
        $("#resultado").append("<p>Ficheros seleccionados: " + this.files.length + "</p>");
    }

    calculateSize() {
        let nBytes = 0;
        for (let i = 0; i < this.files.length; i++) {
            nBytes += this.files[i].size;
        }
        $("#resultado").append("<p>Tamaño total: " + nBytes + " bytes </p>");
    }

    showListFiles() {
        let content = '';
        content += "<h3>Ficheros seleccionados</h3>";
        content += "<ul id='listFile'>";
        for (let i = 0; i < this.files.length; i++) {
            this.showContentFile(this.files[i]);
        }
        content += "</ul>";
        $("#resultado").append(content)
    }

    showContentFile(file) {
        const reader = new FileReader();
        reader.onload = () => {
            this.showDetailsFile(file, reader.result);
        };
        reader.readAsText(file, "UTF-8");
    }

    showDetailsFile(file, content) {
        content = this.convertXML(content);
        let details = "<li>" + file.name;
        details += "<ul>";
        details += "<li>Tamaño: " + file.size + " bytes</li>";
        details += "<li>Tipo: " + file.type + "</li>";
        details += "<li>Ultima modificacion: " + file.lastModifiedDate + "</li>";
        details += "<li>Contenido:<pre>" + content + "</pre></li>";
        details += "</ul>";
        details += "</li>";
        $("#listFile").append(details);
    }

    convertXML(content) {
        content = String(content).replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        return content;
    }
}

const apiFile = new ApiFile();


"use strict";
class Meteo {
    constructor(){
        this.apikey = "81cff1943f540278e8f143afac0f37fb";
        this.ciudad = "Oviedo";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad  + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                $("h2").text(JSON.stringify(datos, null, 2));

                var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                stringDatos += "<li>País: " + datos.sys.country + "</li>";
                stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";

                let div = $("div");
                div.append(stringDatos);
            },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });
    }
    verJSON(){
        this.cargarDatos();
        this.ciudad = "New York";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad  + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();

        this.ciudad = "London";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad  + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();

        this.ciudad = "Amsterdam";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();

        this.ciudad = "Montreal";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad  + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();
        $("button").attr("disabled","disabled");
    }
}
var meteo = new Meteo();