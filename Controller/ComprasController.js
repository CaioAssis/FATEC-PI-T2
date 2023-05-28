import { Compras } from "../models/Relacao.js"

class ComprasController {
    static async getCompras(req,res){
        const compra = await Compras.findAll()
        res.json(compra)
    }

    static async createCompra(req, res){
        const {dataPedido, dataEntrega, totalPedido, formaPagamento} = req.body
        if (!dataPedido || !dataEntrega || !totalPedido || !formaPagamento) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
        
        const createdCompra = await Compras.create(req.body)
        res.status(201).json(createdCompra)
    }

    static async getCompraById(req, res){
        const id = parseInt(req.params.id)
        const compra = await Compras.findByPk(id)
        if(!compra){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        res.status(200).json(compra)
    }

    static async destroyCompra(req,res){
        const id = parseInt(req.params.id)
        const compra = await Compras.findByPk(id)
        if(!compra){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Compras.destroy({where: {id: compra.id}})
        res.json({message: "Removido com sucesso!"})
    }

    static async updateCompra(req, res){
        const id = parseInt(req.params.id)
        const compra = await Compras.findByPk(id)
        if(!compra){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {dataPedido, dataEntrega, totalPedido, formaPagamento} = req.body
        if (!dataPedido || !dataEntrega || !totalPedido || !formaPagamento) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedCompra = await Compras.update({dataPedido, dataEntrega, totalPedido, formaPagamento}, {where: {id: compra.id}})
        res.json(updatedCompra)
    }

}

export default ComprasController