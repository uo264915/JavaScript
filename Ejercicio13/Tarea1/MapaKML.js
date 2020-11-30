"use strict";
class MapaKML {
    constructor() {
    }

    init() {
        const file = this.files = document.getElementById('files').files[0];
        if (file.name.includes('.kml')) {
            const reader = new FileReader();
            reader.onload = () => {
                const mapaKML = new google.maps.Map(document.getElementById('mapSection'), {
                    zoom: 10,
                });
                const geoXml = new geoXML3.parser({mapa: mapaKML});
                geoXml.parseKmlString(reader.result);
            };
            reader.readAsText(file);
        } else {
            alert("Error al cargar el archivo");
        }
    }
}

const mapa = new MapaKML();
