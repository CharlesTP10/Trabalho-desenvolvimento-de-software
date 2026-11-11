const quicksort = require('../funcoes/quicksort');

test('deve ordenar um array desordenado', () => {
    expect(quicksort([34, 7, 23, 32, 5, 62])).toMatchObject([5, 7, 23, 32, 34, 62]);
});

test('deve ordenar um array menor', () => {
    expect(quicksort([5, 1, 4])).toMatchObject([1, 4, 5]);
});