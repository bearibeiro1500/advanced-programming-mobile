function mensagemCadaDia(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo: dia de descanso!");
            break;
        case 2:
            console.log("Segunda-feira: começo da semana!");
            break;
        case 3:
            console.log("Terça-feira: vamos com tudo!");
            break;
        case 4:
            console.log("Quarta-feira: meio da semana!");
            break;
        case 5:
            console.log("Quinta-feira: falta pouco!");
            break;
        case 6:
            console.log("Sexta-feira: quase lá!");
            break;
        case 7:
            console.log("Sábado: Dia de relaxar!");
            break;
        default:
            console.log("Número inválido! Insira um valor entre 1 e 7.");
    }
}