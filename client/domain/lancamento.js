class Lancamento {
    constructor(categoria, tipo, valor, idLancamento) {
        if (categoria === "") {
            throw new Error("Lançamento inválido: A Categoria é de preenchimento obrigatório.");
        }
        if (tipo !== "receita" && tipo !== "despesa") {
            throw new Error("Lançamento inválido: O Tipo deve ser receita ou despesa.");
        } 
        if (valor <= 0) {
            throw new Error("Lançamento inválido: O Valor deve ser maior que zero.");
        }
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;
        this.idLancamento = idLancamento;
    }

    getValorString() {
        return this.tipo === "despesa" ? this.valor * -1 : this.valor;
    }
}