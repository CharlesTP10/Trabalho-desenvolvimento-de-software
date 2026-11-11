function contagem(notas) {
    let contador = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 50) {
            contador = contador + 1;
        }
    }
    return contador;
}
module.exports = contagem; 