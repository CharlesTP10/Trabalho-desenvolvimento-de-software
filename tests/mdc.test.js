const mdc = require('../funcoes/mdc');

test('mdc entre 10 e 5 deve ser 5', () => {
    expect(mdc(10, 5)).toBe(5);
});

test('mdc entre 24 e 36 deve ser 12', () => {
    expect(mdc(24, 36)).toBe(12);
});