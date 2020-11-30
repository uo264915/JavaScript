"use strict";

class Noticias {
    constructor() {
        this.map = new Map();
    }

    showData() {
        let div = $("#print");
        div.empty();
        this.loadData();
    }

    loadData() {
        $.ajax({
            dataType: "json",
            url: "http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-30&sortBy=publishedAt&apiKey=81cff1943f540278e8f143afac0f37fb",
            method: 'GET',
            success: (datos) => {
                for (let res in datos.rates) {
                    this.map.set("" + res, datos.rates[res]);
                }
                const printer = $("#print");
                printer.append("<section>");
                this.addTable();
                printer.append("</section>");
            },
            error: function () {
                alert("No válido");
            }
        });
    }

    addTable() {
        const clave = Array.from(this.map.keys());
        let p = $("p");
        p.append("<h3>Noticia</h3>");
        p.append("<h4>Informacion</h4>");
        for (let param in clave) {
            p.append("<p>" + clave[param] + "</p>");
            p.append("<p>" + this.map.get(clave[param]) + "</p>");
        }
    }
}
let noticias = new Noticias();
