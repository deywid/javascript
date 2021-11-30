export function temMaisDe100kkHab(pais) {
  return pais.population > 100000000;
}

export function pegaNomeRegiao(pais) {
  return { name: pais.name, region: pais.region }
}

export function ehTudoEuro(pais) {
  return pais.region === "Europe"
}

export function pegaMediaPopulacao(paises, regiao) {
  const europa = paises.filter(pais => pais.region === regiao)
    .map(pais => pais.population);
  return Math.ceil((europa.reduce((total, atual) => total + atual) / europa.length)).toFixed(0);
}

export function pegaPrimeiroPaisRegiao(pais) {
  return pais.region === "Africa"
}

export function pegaTodosPaisesRegiao(pais) {
  return pais.region === "Asia";
}

export function somarArea(paises) {
  return paises.map(pais => pais.area)
    .reduce((total, atual) => total + atual);
} 