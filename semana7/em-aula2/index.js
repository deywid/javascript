const STAR_WARS =
[{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male"
}, {
  "name": "C-3PO",
  "height": "167",
  "mass": "75",
  "hair_color": "n/a",
  "skin_color": "gold",
  "eye_color": "yellow",
  "birth_year": "112BBY",
  "gender": "n/a"
}, {
  "name": "R2-D2",
  "height": "96",
  "mass": "32",
  "hair_color": "n/a",
  "skin_color": "white, blue",
  "eye_color": "red",
  "birth_year": "33BBY",
  "gender": "n/a"
}, {
  "name": "Darth Vader",
  "height": "202",
  "mass": "136",
  "hair_color": "none",
  "skin_color": "white",
  "eye_color": "yellow",
  "birth_year": "41.9BBY",
  "gender": "male"
}, {
  "name": "Leia Organa",
  "height": "150",
  "mass": "49",
  "hair_color": "brown",
  "skin_color": "light",
  "eye_color": "brown",
  "birth_year": "19BBY",
  "gender": "female"
}, {
  "name": "Obi-Wan Kenobi",
  "height": "182",
  "mass": "77",
  "hair_color": "auburn, white",
  "skin_color": "fair",
  "eye_color": "blue-gray",
  "birth_year": "57BBY",
  "gender": "male"
}, {
  "name": "Yoda", 
  "height": "66", 
  "mass": "17", 
  "hair_color": "white", 
  "skin_color": "green", 
  "eye_color": "brown", 
  "birth_year": "896BBY", 
  "gender": "male"
}, {
  "name": "Palpatine", 
  "height": "170", 
  "mass": "75", 
  "hair_color": "grey", 
  "skin_color": "pale", 
  "eye_color": "yellow", 
  "birth_year": "82BBY", 
  "gender": "male"
}]

const personagensSemGeneroDefinido = STAR_WARS.filter(pers => pers.gender === "n/a");

const personagemMassaMenor30 = STAR_WARS.filter(pers => pers.mass < 30);

const totalMassa = STAR_WARS.reduce((total, atual) => {
  return total + Number(atual.mass);
}, 0);
const mediaMassa = totalMassa / STAR_WARS.length;

const totalAltura = STAR_WARS.reduce((total, atual) => {
  return total + Number(atual.height);
}, 0);
const mediaAltura = totalAltura / STAR_WARS.length; 

const primeiroPersonagemFem = STAR_WARS.find(pers => pers.gender === "female");

const listaPersonagemAlturaMaior150 = STAR_WARS.filter(pers => pers.height > 150);

const homens = STAR_WARS.filter(pers => pers.gender === "male" && pers.mass > 50);
const totalAlturaHomens = homens.reduce((total, atual) => {
    return total + Number(atual.height)
}, 0);
const mediaAlturaHomens = Math.floor(totalAlturaHomens / homens.length);