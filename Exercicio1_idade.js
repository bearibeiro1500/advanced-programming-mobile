function classificandoIdade(idade) {
    if(typeof idade !== "number" || idade < 0) {
        console.log("Idade inválida");
        return;
    }    
    if (idade < 12) {
        console.log("criança");
    } else if (idade < 18) {
        console.log("adolescente");
    } else if (idade < 60) {
        console.log("adulto");
    } else {
        console.log("idoso");
    }
}