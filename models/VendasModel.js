import Cliente from "../Models/ClienteModel.js"
////

export class Vendas {
    constructor(
        idPedido,
        idCliente,
        nome,
        cpf,
        telefone,
        dataPedido,
        dataEntrega,
        totalPedido,
        formaPagamento
    ) {
        this.idPedido = idPedido
        this.idCliente = idCliente
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
        this.dataPedido = dataPedido
        this.dataEntrega = dataEntrega
        this.totalPedido = totalPedido
        this.formaPagamento = formaPagamento
    }
}

export const update = (idPedido, pedidoVenda) => {
    const vendasToUpdate = findByPk(idPedido)
    if (!vendasToUpdate) {
        return false
    }

    const index = dbVendas.indexOf(vendasToUpdate)
    dbVendas[index] = pedidoVenda
    return true
}

export const destroy = (idPedido) => {
    const pedidoVenda = findByPk(idPedido)
    if (!pedidoVenda) {
        return false
    }
    const index = dbVendas.indexOf(pedidoVenda)
    dbVendas.splice(index, 1)
    return true
}

export const findByPk = (idPedido) => {
    return dbVendas.find((pedidoVenda) => pedidoVenda.idPedido === idPedido)
}

export const create = (pedidoVenda) => {
    pedidoVenda.id = dbVendas.length + 1
    dbVendas.push(pedidoVenda)
}

export const findAllVendas = () => {
    return dbVendas
}

export const dbVendas = [
    new Vendas(
        1,
        1,
        "NomeCliente1",
        "XXX.XXX.XXX-XX",
        "(XX) XXXX-XXXX",
        "01/04/2023",
        "30/04/2023",
        "X.XXX Reais",
        "Credito"
    ),
    new Vendas(
        2,
        1,
        "NomeCliente2",
        "XXX.XXX.XXX-XX",
        "(XX) XXXX-XXXX",
        "01/05/2023",
        "30/05/2023",
        "X.XXX Reais",
        "Dinheiro"
    ),
    new Vendas(
        3,
        1,
        "NomeCliente3",
        "XXX.XXX.XXX-XX",
        "(XX) XXXX-XXXX",
        "01/06/2023",
        "30/06/2023",
        "X.XXX Reais",
        "Debito"
    ),
]

////
Vendas.BelongsTo(Cliente, {constraints: true})