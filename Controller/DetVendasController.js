import { DetVendas } from "../models/Relacao.js"
class DetVendasController {
    static async getDetVendas(req,res){
        const detVenda = await DetVendas.findAll()
        res.json(detVenda)
    }

    static async createDetVenda(req, res){
        const {descricaoPedido, quantidade, valor} = req.body
        if (!descricaoPedido || !quantidade || !valor) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdDetVenda = await DetVendas.create(req.body)
        res.json(createdDetVenda)
    }

    static async getDetVendaById(req, res){
        const id = parseInt(req.params.id)
        const detVenda = await DetVendas.findByPk(id)
        if(!detVenda){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        res.status(200).json(detVenda)
    }

    static async destroyDetVenda(req,res){
        const id = parseInt(req.params.id)
        const detVenda = await DetVendas.findByPk(id)
        if(!detVenda){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await DetVendas.destroy({where: {id: detVenda.id}})
        res.json({message: "Removido com sucesso!"})
    }

    static async updateDetVenda(req, res){
        const id = parseInt(req.params.id)
        const detVenda = await DetVendas.findByPk(id)
        if(!detVenda){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {descricaoPedido, quantidade, valor} = req.body
        if (!descricaoPedido || !quantidade || !valor) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedDetVenda = await DetVendas.update({descricaoPedido, quantidade, valor}, {where: {id: detVenda.id}})
        res.json(updatedDetVenda)
    }

}

export default DetVendasController