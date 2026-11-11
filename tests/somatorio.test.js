const somatorio = require('../funcoes/somatorio');

test('somatorio de [10, 20, 30] deve ser 60', () => {
    expect(somatorio([10, 20, 30])).toBe(60);
});

test('somatorio de [5, 5, 5] deve ser 15', () => {
    expect(somatorio([5, 5, 5])).toBe(15);
});