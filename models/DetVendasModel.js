export class DetVendas {
    constructor(
        idPedido,
        idProduto,
        descricaoProduto,
        quantidade,
        unidadeMedida,
        valorUnitario,
        valorTotal
    ) {
        this.idpedido = idPedido
        this.idProduto = idProduto
        this.descricaoProduto = descricaoProduto
        this.quantidade = quantidade
        this.unidadeMedida = unidadeMedida
        this.valorUnitario = valorUnitario
        this.valorTotal = valorTotal
    }
}

export const update = (idPedido, detPedidoVenda) => {
    const detVendaToUpdate = findByPk(idPedido)
    if (!detVendaToUpdate) {
        return false
    }

    const index = dbDetVendas.indexOf(detVendaToUpdate)
    dbDetVendas[index] = detPedidoVenda
    return true
}

export const destroy = (idPedido) => {
    const detPedidoVenda = findByPk(idPedido)
    if (!detPedidoVenda) {
        return false
    }
    const index = dbDetVendas.indexOf(detPedidoVenda)
    dbDetVendas.splice(index, 1)
    return true
}

export const findByPk = (idPedido) => {
    return dbDetVendas.find(
        (detPedidoVenda) => detPedidoVenda.idPedido === idPedido
    )
}

export const create = (detPedidoVenda) => {
    detPedidoVenda.id = dbDetVendas.length + 1
    dbDetVendas.push(detPedidoVenda)
}

export const findAllDetVendas = () => {
    return dbDetVendas
}

export const dbDetVendas = [
    new DetVendas(1, 1, "Descrição Produto 1", 5, "unidade", 20, 100),
    new DetVendas(1, 2, "Descrição Produto 2", 20, "unidade", 10, 200),
    new DetVendas(1, 3, "Descrição Produto 3", 30, "unidade", 10, 300),
]
