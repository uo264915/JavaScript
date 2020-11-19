"use strict";

class Calculadora {
    constructor() {
        this.stack = [];
    }

    display(digit) {
        let display = document.getElementById("pantalla");
        if (display.value === '0') {
            display.value = digit;
        } else {
            display.value += digit;
        }
    }

    operationAdd(operation) {
        
            var first = this.stack.pop();
            var second = this.stack.pop();
            var result = new Function(first, operation, second) 
            result();
            this.stack.push(result);
            document.getElementById("resultado").value = result;
        
    }

    result(first, operation, second){
        
    }

    operationAddNumber(number) {
        if (Number.isNaN(number)) {
            alert('El valor introducido no es correcto');
        } else {
            this.stack.push(number);
        }
    }

    enter() {
        const value = document.getElementById("pantalla").value;
        this.operationAddNumber(value);
        document.getElementById("pantalla").value = 0;
    }

    showMemory() {
        const display = document.getElementById("pantalla");
        display.value = this.memory;
        this.memory = 0;
    }
}

class CalculadoraDietetica extends Calculadora {
    constructor() {
        super();
        this.resultado = 0;
    }

    guardarPantalla() {
        const display = document.getElementById("pantalla");
        this.resultado = eval(display.value);
    }


    actualizarPantalla() {
        const display = document.getElementById("pantalla");
        display.value = this.resultado;
    }

    legumbres(){
        this.guardarPantalla();
        this.resultado = 190;
        this.actualizarPantalla();
    }

    nadar(){
        this.guardarPantalla();
        this.resultado = -240;
        this.actualizarPantalla();
    }

    bici(){
        this.guardarPantalla();
        this.resultado = -200;
        this.actualizarPantalla();
    }

    correr() {
        this.guardarPantalla();
        this.resultado = -300;
        this.actualizarPantalla();
    }

    tomate() {
        this.guardarPantalla();
        this.resultado = 123;
        this.actualizarPantalla();
    }

    arroz() {
        this.guardarPantalla();
        this.resultado = 130;
        this.actualizarPantalla();
    }

    patata() {
        this.guardarPantalla();
        this.resultado = 77;
        this.actualizarPantalla();
    }

    queso() {
        this.guardarPantalla();
        this.resultado = 402;
        this.actualizarPantalla();
    }

    fileteCarne() {
        this.guardarPantalla();
        this.resultado = 271;
        this.actualizarPantalla();
    }
    pollo(){
        this.guardarPantalla();
        this.resultado = 239;
        this.actualizarPantalla();
    }

    jamon(){
        this.guardarPantalla();
        this.resultado = 145;
        this.actualizarPantalla();
    }
    pan(){
        this.guardarPantalla();
        this.resultado = 265;
        this.actualizarPantalla();
    }
    leche(){
        this.guardarPantalla();
        this.resultado = 42;
        this.actualizarPantalla();
    }

    verdura(){
        this.guardarPantalla();
        this.resultado = 65;
        this.actualizarPantalla();
    }

    pescado(){
        this.guardarPantalla();
        this.resultado = 200;
        this.actualizarPantalla();
    }
    pasta(){
        this.guardarPantalla();
        this.resultado = 158;
        this.actualizarPantalla();
    }

    chocolate(){
        this.guardarPantalla();
        this.resultado = 546;
        this.actualizarPantalla();
    }
}

let calculadora = new CalculadoraDietetica();