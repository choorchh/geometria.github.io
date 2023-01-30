'use strict'

const valorResultado = document.getElementById('resultado')
/* ----------------CUADRADO ----------------------------- */
const periCuadrado = (lado) => lado * 4 ;
const areaCuadrado = (lado) => lado * lado;

function resPeriCuadrado(){
    let inputLado = document.getElementById('inputLado');
    let value = Number(inputLado.value);

    const resultado = `EL perimetro del Cuadrado es: ${periCuadrado(value)} CM` ;
    valorResultado.innerText = resultado;
}

function resAreaCuadrado(){
    let inputLado = document.getElementById('inputLado');
    let value = Number(inputLado.value);

    const resultado = `EL area del Cuadrado es: ${areaCuadrado(value)} CM^2` ;
    valorResultado.innerText = resultado;
}
/* ---------------------------------Triangulo--------------------------- */
const periTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

function resPeriTriangulo(){
let lado1 = document.getElementById('lado1');
let lado2 = document.getElementById('lado2');
let base = document.getElementById('base');
lado1 = Number(lado1.value);
lado2 = Number(lado2.value);
base = Number(base.value);

const resultado = `EL perimetro del Triangulo es: ${periTriangulo(lado1, lado2, base)} CM`;
valorResultado.innerText = resultado;
}
function resAreaTriangulo(){
let base = document.getElementById('base');
let altura = document.getElementById('altura');
base = Number(base.value);
altura = Number(altura.value);

const resultado = `EL area del Triangulo es: ${areaTriangulo(base, altura)} CM^2`;
valorResultado.innerText = resultado;
}

/* -------------------CIRCULO------------------ */

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;
const areaCirculo = (radio) => (radio * radio) * Math.PI;

function resDiametroCirculo(){
 let radio = document.getElementById('radio');
 radio = Number(radio.value);
 
 const resultado = `EL diametro del Circulo es: ${diametroCirculo(radio)} CM`;
 valorResultado.innerText = resultado;
}

function resPerimetroCirculo(){
    let radio = document.getElementById('radio');
    radio = Number(radio.value);

    const resultado = `EL perimetro del Circulo es: ${perimetroCirculo(radio)} CM`;
    valorResultado.innerText = resultado;
}

function resAreaCirculo(){
    let radio = document.getElementById('radio');
    radio = Number(radio.value);

    const resultado = `EL area del Circulo es: ${areaCirculo(radio)} CM^2`;
    valorResultado.innerText = resultado;
}
