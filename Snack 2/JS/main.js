const allStudents = [
  " 213 ",
  "Marco della Rovere",
  "78",
  "110",
  "Paola Cortellessa",
  "96",
  "250",
  "Andrea Mantegna",
  "48",
  "145",
  "Gaia Borromini",
  "74",
  "196",
  "Luigi Grimaldello",
  "68",
  "102",
  "Piero della Francesca",
  "50",
  "120",
  "Francesca da Polenta",
  "84",
];

const nomiInMaiuscolo = allStudents.map((nomi) => nomi.toUpperCase());
console.log(nomiInMaiuscolo);

const studenti = allStudents.map((studente) => {
  return {
    id: 213,
    nome: studente,
    voto: 78,
  };
});
console.log(stu);
