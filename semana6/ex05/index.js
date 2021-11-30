const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const resultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('btn-calcular');

export { nota1, nota2, nota3, resultado };
import { media } from "./modules/func-media.js";

btnCalcular.addEventListener('click', media);