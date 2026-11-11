function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let numeros = [0, 1];
    for (let i = 2; i < n; i++) {
        let sucessor = numeros[i - 1] + numeros[i - 2];
        numeros.push(sucessor);
    }
    return numeros;
}
module.exports = fibonacci;