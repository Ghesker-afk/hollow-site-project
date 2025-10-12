export function estimateHits(bossHealth: number, needleDamage: number): string {
  return `${(bossHealth / needleDamage).toFixed(0)}`;
}