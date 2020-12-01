'use strict';

class MapaKML {
    constructor() {
    }

    init() {
        const file = this.files = document.getElementById('files').files[0];
        if (file.name.includes('.kml')) {
            const reader = new FileReader();
            reader.onload = () => {
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                });
                const geoXml = new geoXML3.parser({map: map});
                geoXml.parseKmlString(reader.result);
            };
            reader.readAsText(file);
        } else {
            alert("Error al cargar el archivo");
        }
    }
}

const map = new MapaKML();