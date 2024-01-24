const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];
console.log(vips);

const invitees = vips.map((vip, index) => {
  return {
    tavolo: "tavolo vip",
    nome: vip,
    posto: index,
  };
});
console.log(invitees);
