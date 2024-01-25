const bicycles = [
  {
    nome: "bike",
    peso: 80,
  },
  {
    nome: "mountainbike",
    peso: 72,
  },
  {
    nome: "crossbike",
    peso: 81,
  },
  {
    nome: "spinningbike",
    peso: 63,
  },
  {
    nome: "hydrobike",
    peso: 51,
  },
];

let pesoMinore = bicycles[0].peso;
let position = 0;

for (let i = 1; i < bicycles.length; i++) {
  let pesoBike = bicycles[i].peso;

  if (pesoBike < pesoMinore) {
    pesoMinore = pesoBike;
    position = i;
  }
}

console.log(bicycles[position].nome);
console.log(bicycles[position].peso);

const { nome, peso } = bicycles[position];
console.log(`il nome della bicicletta è ${nome} e il suo peso è di ${peso}`);
