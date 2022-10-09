class Lancamento {
    constructor(idLancamento, mes, categoria, tipo, valor) {
        if (categoria === "") {
            throw new Error("Lançamento inválido: A Categoria é de preenchimento obrigatório.");
        }
        if (tipo !== "receita" && tipo !== "despesa") {
            throw new Error("Lançamento inválido: O Tipo deve ser receita ou despesa.");
        } 
        if (valor <= 0) {
            throw new Error("Lançamento inválido: O Valor deve ser maior que zero.");
        }
        this.idLancamento = idLancamento;
        this.mes = mes;
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;
    }
}

module.exports = Lancamento;