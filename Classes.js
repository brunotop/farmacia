"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmacia = void 0;
var leitor = require("readline-sync");
var Medicamento = /** @class */ (function () {
    function Medicamento(nome, qtdEstoque, preco) {
        this.nome = nome;
        this.preco = preco;
        this.qtdEstoque = qtdEstoque;
    }
    return Medicamento;
}());
var Farmacia = /** @class */ (function () {
    function Farmacia() {
        this.medicamentos = [];
    }
    Farmacia.prototype.vendaMedicamentos = function () {
        var nome = leitor.question("Informe o nome do remédio para vender: ");
        var qtd = leitor.questionInt("Informe a quantidade: ");
        var medicamento = this.medicamentos.find(function (m) { return m.nome === nome; });
        if (medicamento) {
            if (medicamento.qtdEstoque >= qtd) {
                medicamento.qtdEstoque -= qtd;
                console.log("Venda realizada: ".concat(qtd, " unidades de ").concat(medicamento.nome));
            }
            else {
                console.log("Estoque insuficiente para a venda de ".concat(qtd, " unidades de ").concat(medicamento.nome));
            }
        }
        else {
            console.log("Medicamento ".concat(nome, " n\u00E3o encontrado!"));
        }
    };
    // setters dos medicamentos 
    Farmacia.prototype.comprarMedicamento = function () {
        var nome = leitor.question("Informe o nome do medicamento que irá ser comprado: ");
        var qtd = leitor.questionInt("A quantidade a ser comprada: ");
        var preco = leitor.questionInt("Informe o valor do medicamento: ");
        var medicamento = this.medicamentos.find(function (m) { return m.nome === nome; });
        if (medicamento) {
            medicamento.qtdEstoque += qtd;
            medicamento.preco = preco;
        }
        else {
            var novoMedicamento = new Medicamento(nome, qtd, preco);
            this.medicamentos.push(novoMedicamento);
        }
        console.log("Compra realizada ".concat(qtd, " unidades de ").concat(nome));
    };
    Farmacia.prototype.inserirMedicamento = function () {
        var nome = leitor.question("Informe o nome do medicamento que irá ser inserido: ");
        var qtd = leitor.questionInt("A quantidade a ser inserida: ");
        var preco = leitor.questionInt("Informe o valor do medicamento: ");
        var novoMedicamento = new Medicamento(nome, qtd, preco);
        this.medicamentos.push(novoMedicamento);
        console.log("Medicamento ".concat(novoMedicamento.nome, " inserido no estoque"));
    };
    Farmacia.prototype.removerMedicamento = function () {
        var nome = leitor.question("Informe o nome do medicamento que irá ser removido: ");
        var index = this.medicamentos.findIndex(function (m) { return m.nome === nome; });
        if (index) {
            this.medicamentos.splice(index, 1);
            console.log("Medicamento ".concat(nome, " removido do estoque"));
        }
        else {
            console.log("Medicamento ".concat(nome, " n\u00E3o removido do estoque, verifique o nome informado"));
        }
    };
    Farmacia.prototype.substituirMedicamento = function () {
        var nomeAntigo = leitor.question("Insira o nome do remédio a ser substituido: ");
        var medicamentoAntigo = this.medicamentos.find(function (m) { return m.nome === nomeAntigo; });
        if (medicamentoAntigo) {
            //remover o remedio antigo
            var index = this.medicamentos.findIndex(function (m) { return m.nome === nomeAntigo; });
            this.medicamentos.splice(index, 1);
            //inserir remedio novo
            var nomeNovo = leitor.question("Insira o nome do remédio a ser inserido no estoque: ");
            var qtd = leitor.questionInt("A quantidade a ser inserida: ");
            var preco = leitor.questionInt("Informe o valor do medicamento: ");
            var medicamentoNovo = new Medicamento(nomeNovo, qtd, preco);
            this.medicamentos.push(medicamentoNovo);
            console.log("Substituição realizada!");
        }
        else {
            console.log("Medicamento não encontrado para remoção");
        }
    };
    // get medicamentos:
    Farmacia.prototype.visualizarEstoque = function () {
        console.log('Estoque de medicamento:');
        this.medicamentos.forEach(function (medicamento) {
            console.log("Nome: ".concat(medicamento.nome));
            console.log("Quantidade: ".concat(medicamento.qtdEstoque));
            console.log("Preco: ".concat(medicamento.preco));
        });
    };
    return Farmacia;
}());
exports.Farmacia = Farmacia;
