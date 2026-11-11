const numeroPrimo = require('../funcoes/numeroprimo');

test('numero 7 deve ser primo', () => {
    expect(numeroPrimo(7)).toBe(true);
});

test('numero 10 nao deve ser primo', () => {
    expect(numeroPrimo(10)).toBe(false);
});