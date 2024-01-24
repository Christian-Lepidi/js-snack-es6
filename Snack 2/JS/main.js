const allStudents = [
  {
    id: 213,
    nome: "Marco della Rovere",
    voto: 78,
  },
  {
    id: 110,
    nome: "Paola Cortellessa",
    voto: 96,
  },
  {
    id: 250,
    nome: "Andrea Mantegna",
    voto: 48,
  },
  {
    id: 145,
    nome: "Gaia Borromini",
    voto: 74,
  },
  {
    id: 196,
    nome: "Luigi Grimaldello",
    voto: 68,
  },
  {
    id: 102,
    nome: "Piero della Francesca",
    voto: 50,
  },
  {
    id: 120,
    nome: "Francesca da Polenta",
    voto: 84,
  },
];

const nomiInMaiuscolo = allStudents.map((studente) =>
  studente.nome.toUpperCase()
);
console.log(nomiInMaiuscolo);

const votiMaggiori = allStudents.filter((voti) => voti.voto >= 70);
console.log(votiMaggiori);

const votieidAlti = allStudents.filter(
  (numeroIdentificativo) =>
    numeroIdentificativo.voto >= 70 && numeroIdentificativo.id >= 120
);
console.log(votieidAlti);
