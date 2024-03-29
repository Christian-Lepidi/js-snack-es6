const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

for (let team of teams) {
  team.score = Math.floor(Math.random() * 100 + 1);
  team.foul = Math.floor(Math.random() * 100 + 1);
  console.log(team);
}

const foulTeam = teams.map((team) => {
  const { name, foul } = team;
  return { name, foul };
});
console.log(foulTeam);
