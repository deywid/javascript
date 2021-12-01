/* array helper methods */
import PAISES from "./modules/paises.js";
import {
  somarArea,
  temMaisDe100kkHab,
  ehTudoEuro,
  pegaMediaPopulacao,
  pegaNomeRegiao,
  pegaPrimeiroPaisRegiao,
  pegaTodosPaisesRegiao
} from "./modules/funcoes.js";

const paisesComMaisDe100kkHab = PAISES.filter(temMaisDe100kkHab);
const paisesNomeRegiao = PAISES.map(pegaNomeRegiao);
const paisesSaoTodosEuropeus = PAISES.every(ehTudoEuro);
const mediaPopulacaoEuropa = pegaMediaPopulacao(PAISES, "Europe");
const primeiroPaisAfrica = PAISES.find(pegaPrimeiroPaisRegiao);
const todosPaisesAsia = PAISES.filter(pegaTodosPaisesRegiao);
const somaAreaPaises = somarArea(PAISES);

console.log(paisesComMaisDe100kkHab)
console.log(paisesNomeRegiao)
console.log(paisesSaoTodosEuropeus)
console.log(mediaPopulacaoEuropa)
console.log(primeiroPaisAfrica)
console.log(todosPaisesAsia)
console.log(somaAreaPaises)