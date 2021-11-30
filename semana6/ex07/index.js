export const numero1 = document.getElementById('numero1');
export const numero2 = document.getElementById('numero2');
export const resultado = document.getElementById('resultado');
import somar from "./modules/func-somar.js";
import subtrair from "./modules/func-subtrair.js";
import multiplicar from "./modules/func-multiplicar.js";
import dividir from "./modules/func-dividir.js";

document.getElementById('soma').addEventListener('click', somar);
document.getElementById('subtrai').addEventListener('click', subtrair);
document.getElementById('multiplica').addEventListener('click', multiplicar);
document.getElementById('divide').addEventListener('click', dividir);