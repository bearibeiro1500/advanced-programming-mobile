function filtrarPalavrasCurtas(lista) {
    if (!Array.isArray(lista)) {
        console.log("Erro: Insira um array de palavras.");
        return;
    }
    let palavrasCurtas = [];
    lista.forEach(palavra => {
        if (palavra.length < 5) {
            palavrasCurtas.push(palavra);
        }
    });
    return palavraasCurtas;
}
