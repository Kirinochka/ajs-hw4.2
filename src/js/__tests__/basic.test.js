import heroesSort from '../app';

test('should sort heroes', () => {
  const unsorted = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(heroesSort(unsorted)).toEqual(sorted);
  expect(heroesSort(unsorted)).not.toBe(sorted);
});
