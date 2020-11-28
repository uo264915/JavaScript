"use strict";
class GeoLocalizacion {
    constructor() {
        this.map = new Map();
        this.init();
    }

    init() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.display.bind(this),this.errores.bind(this));
        } else {
            alert("Map not found");
        }
    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }

    display() {
        const localizacion = {
            lat: 43.415671,
            lng: -5.787700
        };
        const map = new google.maps.Map($('main')[0],
            {
                zoom: 17,
                center: localizacion
            }
        );
        const marker = new google.maps.Marker({
            position: localizacion,
            map: map
        });
    }
}

const localizacion = new GeoLocalizacion();