function listarPares(limite) {
    if (typeof limite !== "number" || limite < 0) {
        console.log("Número inválido! Informe um número positivo.");
        return;
    }
    let resultado = "";
    for (let i = 0; i <= limite; i += 2) {
        resultado += i + " ";
    }
    console.log(resultado.trim());
}