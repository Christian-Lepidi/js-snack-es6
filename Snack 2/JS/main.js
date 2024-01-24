const allStudents = [
  "Marco della Rovere",
  "Paola Cortellessa",
  "Andrea Mantegna",
  "Gaia Borromini",
  "Luigi Grimaldello",
  "Piero della Francesca",
  "Francesca da Polenta",
];

const nomiInMaiuscolo = allStudents.map((nomi) => nomi.toUpperCase());
console.log(nomiInMaiuscolo);

const studenti = allStudents.map((studente) => {
  return {
    id: 213,
    nome: "Marco della rovere",
    voto: 78,
  };
});
