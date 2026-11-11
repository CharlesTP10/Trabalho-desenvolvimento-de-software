const contagem = require('../funcoes/contagem');

test('deve contar corretamente a quantidade de notas maiores ou iguais a 50', () => {
    expect(contagem([40, 50, 60, 30, 80])).toBe(3);
});

test('deve retornar 0 se nenhuma nota atingir 50', () => {
    expect(contagem([10, 20, 30, 49])).toBe(0);
});