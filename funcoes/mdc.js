function mdc(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return Math.abs(a);
}
module.exports = mdc;