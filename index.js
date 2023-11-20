"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Classes_1 = require("./Classes");
var leitor = require("readline-sync");
var farmacia = new Classes_1.Farmacia();
while (true) {
    console.log("Selecione uma op\u00E7\u00E3o: ");
    console.log("1 - Vender Medicamento");
    console.log("2 - Comprar Medicamento");
    console.log("3 - Substituir Medicamento");
    console.log("4 - Remover Medicamento");
    console.log("5 - Inserir Medicamento");
    console.log("6 - Visualizar Estoque");
    console.log("7 - Sair");
    var option = leitor.questionInt("Digite o número desejado: ");
    switch (option) {
        case 1:
            farmacia.vendaMedicamentos();
            break;
        case 2:
            farmacia.comprarMedicamento();
            break;
        case 3:
            farmacia.substituirMedicamento();
            break;
        case 4:
            farmacia.removerMedicamento();
            break;
        case 5:
            farmacia.inserirMedicamento();
            break;
        case 6:
            farmacia.visualizarEstoque();
            break;
        case 7:
            console.log("Saindo...");
            process.exit(0);
        default:
            console.log("Opção inválida, tente novamente");
    }
}
