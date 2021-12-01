import STAR_WARS from "./modules/starwars.js"

//trazer apenas os personagens sem um genero definido
const personagensSemGeneroDefinido = STAR_WARS.filter(pers => pers.gender === "n/a");

//trazer apenas os personagens com massa menor que 30
const personagemMassaMenor30 = STAR_WARS.filter(pers => pers.mass < 30);

//trazer a media de massa e media de altura de todos os personagens
const totalMassa = STAR_WARS.reduce((total, atual) => {
  return total + Number(atual.mass);
}, 0);
const mediaMassa = totalMassa / STAR_WARS.length;

const totalAltura = STAR_WARS.reduce((total, atual) => {
  return total + Number(atual.height);
}, 0);
const mediaAltura = totalAltura / STAR_WARS.length; 

//trazer o primeiro personagem de genero feminino
const primeiroPersonagemFem = STAR_WARS.find(pers => pers.gender === "female");

//trazer apenas os personagens de altura maior que 150
const listaPersonagemAlturaMaior150 = STAR_WARS.filter(pers => pers.height > 150);

//trazer a media de altura de todos os personagens de genero masculino
const homens = STAR_WARS.filter(pers => pers.gender === "male" && pers.mass > 50);
const totalAlturaHomens = homens.reduce((total, atual) => {
    return total + Number(atual.height)
}, 0);
const mediaAlturaHomens = Math.floor(totalAlturaHomens / homens.length);