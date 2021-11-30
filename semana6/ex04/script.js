//default function parameter exemple - initialize params with default value if it's undefined

const nomeCompleto = (nome = "Jane", sobrenome = "Doe") => {
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto("Deywid", "Felipe"));
console.log(nomeCompleto());