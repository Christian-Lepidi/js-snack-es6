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

for (i = 0; i < bicycles.length; i++) {
  console.log(bicycles[i]);
}

for (let i of bicycles) {
}
