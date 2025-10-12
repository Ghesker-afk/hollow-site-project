export type Boss = {
  name: string,
  health: number,
  phases: number,
  area: string
};

export const bosses: Boss[] = [
  {
    name: "Last Judge",
    health: 720,
    phases: 3,
    area: "Blasted Steps"
  }, {
    name: "Lost Lace",
    health: 1800,
    phases: 3,
    area: "The Abyss"
  }, {
    name: "Skarssinger Carmelita",
    health: 1500,
    phases: 3,
    area: "Far Fields"
  }
];