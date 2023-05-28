import Vendas from "../models/VendasModel.js"
class VendasController {
    static async getVendas(req,res){
        const venda = await Vendas.findAll()
        res.json(venda)
    }

    static async createVenda(req, res){
        const {descricaoPedido, quantidade, valor} = req.body
        if (!descricaoPedido || !quantidade || !valor) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdVenda = await Vendas.create(req.body)
        res.json(createdVenda)
    }

    static async getVendaById(req, res){
        const id = parseInt(req.params.id)
        const venda = await Vendas.findByPk(id)
        if(!venda){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        res.status(200).json(venda)
    }

    static async destroyVenda(req,res){
        const id = parseInt(req.params.id)
        const venda = await Vendas.findByPk(id)
        if(!venda){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Vendas.destroy({where: {id: venda.id}})
        res.json({message: "Removido com sucesso!"})
    }

    static async updateVenda(req, res){
        const id = parseInt(req.params.id)
        const venda = await Vendas.findByPk(id)
        if(!venda){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {descricaoPedido, quantidade, valor} = req.body
        if (!descricaoPedido || !quantidade || !valor) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedVenda = await Vendas.update({descricaoPedido, quantidade, valor}, {where: {id: venda.id}})
        res.json(updatedVenda)
    }

}

export default VendasController