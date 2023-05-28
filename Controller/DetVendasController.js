import {
    DetVendas,
    update,
    destroy,
    findByPk,
    create,
    findAllDetVendas,
} from "../models/DetVendasModel.js"

class DetVendasController {
    static getDetVenda(req, res) {
        res.json(findAllDetVendas())
    }

    static createDetVenda(req, res) {
        const {
            idPedido,
            idProduto,
            descricaoProduto,
            quantidade,
            unidadeMedida,
            valorUnitario,
            valorTotal,
        } = req.body
        if (!idPedido || !idProduto || !quantidade || !valorUnitario) {
            res.status(400).json({
                error: "Cód. Pedido, Cod. Produto, Quantidade e Valor Unitário são obrigatórios",
            })
            return
        }

        const pedidoVenda = new DetVendas(
            idPedido,
            idProduto,
            descricaoProduto,
            quantidade,
            unidadeMedida,
            valorUnitario,
            valorTotal
        )
        create(pedidoVenda)
        res.json(pedidoVenda)
    }

    static getDetPedidoVendaById(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const pedidoVenda = findByPk(idPedido)
        if (!pedidoVenda) {
            res.status(404).json({
                error: "Detalhe do Pedido de Venda não encontrado",
            })
            return
        }
        res.json(pedidoVenda)
    }

    static destroyDetPedidoVenda(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const pedidoVenda = findByPk(idPedido)
        if (!pedidoVenda) {
            res.status(404).json({
                error: "Detalhe do Pedido de Venda não encontrado",
            })
            return
        }
        destroy(idPedido)
        res.json({ message: "Pedido de Venda removido com sucesso" })
    }

    static updateDetPedidoVenda(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const pedidoVenda = findByPk(idPedido)
        if (!pedidoVenda) {
            res.status(404).json({
                error: "Detalhe do Pedido de Venda não encontrado",
            })
            return
        }

        const {
            idProduto,
            descricaoProduto,
            quantidade,
            unidadeMedida,
            valorUnitario,
            valorTotal,
        } = req.body
        if (!idProduto || !quantidade || !valorUnitario) {
            res.status(400).json({
                error: "Cód. Produto, Quantidade e Valor Unitário são obrigatórios",
            })
            return
        }

        pedidoVenda.idProduto = idProduto
        pedidoVenda.descricaoProduto = descricaoProduto
        pedidoVenda.quantidade = quantidade
        pedidoVenda.unidadeMedida = unidadeMedida
        pedidoVenda.valorUnitario = valorUnitario
        pedidoVenda.valorTotal = valorTotal

        update(idPedido, pedidoVenda)
        res.json(pedidoVenda)
    }
}

export default DetVendasController
