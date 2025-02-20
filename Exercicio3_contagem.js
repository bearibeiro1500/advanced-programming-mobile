function contarAte(numero) {
    if (typeof numero !== "number" || numero <= 0) {
        console.log("Número inválido! Informe um número positivo.");
        return;
    }
    let resultado = "";
    for (let i = 1; i <= numero; i++) {
        resultado += i + " ";
    }
    console.log(resultado.trim());
}
