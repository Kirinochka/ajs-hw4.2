// TODO: write your code here
export default function heroesSort(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
