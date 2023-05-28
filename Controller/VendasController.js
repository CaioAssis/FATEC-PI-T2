import {
    Vendas,
    update,
    destroy,
    findByPk,
    create,
    findAllVendas,
} from "../models/VendasModel.js"

class VendasController {
    static getVenda(req, res) {
        res.json(findAllVendas())
    }

    static createVenda(req, res) {
        const {
            idPedido,
            idCliente,
            nome,
            cpf,
            telefone,
            dataPedido,
            dataEntrega,
            totalPedido,
            formaPagamento,
        } = req.body
        if (!idPedido || !idCliente || !dataPedido) {
            res.status(400).json({
                error: "Cód. Pedido, Cod. Cliente e Data são obrigatórios",
            })
            return
        }

        const pedidoVenda = new Vendas(
            idPedido,
            idCliente,
            nome,
            cpf,
            telefone,
            dataPedido,
            dataEntrega,
            totalPedido,
            formaPagamento
        )
        create(pedidoVenda)
        res.json(pedidoVenda)
    }

    static getPedidoVendaById(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const pedidoVenda = findByPk(idPedido)
        if (!pedidoVenda) {
            res.status(404).json({ error: "Pedido de Venda não encontrado" })
            return
        }
        res.json(pedidoVenda)
    }

    static destroyPedidoVenda(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const pedidoVenda = findByPk(idPedido)
        if (!pedidoVenda) {
            res.status(404).json({ error: "Pedido de Venda não encontrado" })
            return
        }
        destroy(idPedido)
        res.json({ message: "Pedido de Venda removido com sucesso" })
    }

    static updatePedidoVenda(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const pedidoVenda = findByPk(idPedido)
        if (!pedidoVenda) {
            res.status(404).json({ error: "Pedido de Venda não encontrado" })
            return
        }

        const {
            idCliente,
            nome,
            cpf,
            telefone,
            dataPedido,
            dataEntrega,
            totalPedido,
            formaPagamento,
        } = req.body
        if (!idCliente || !dataPedido) {
            res.status(400).json({
                error: "Cod. Cliente e Data são obrigatórios",
            })
            return
        }

        pedidoVenda.idCliente = idCliente
        pedidoVenda.nome = nome
        pedidoVenda.cpf = cpf
        pedidoVenda.telefone = telefone
        pedidoVenda.dataPedido = dataPedido
        pedidoVenda.dataEntrega = dataEntrega
        pedidoVenda.totalPedido = totalPedido
        pedidoVenda.formaPagamento = formaPagamento

        update(idPedido, pedidoVenda)
        res.json(pedidoVenda)
    }
}

export default VendasController
