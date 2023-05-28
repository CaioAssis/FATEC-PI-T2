import { DetCompras } from "../models/Relacao.js"
class DetComprasController {
    static async getDetCompras(req,res){
        const detCompra = await DetCompras.findAll({include: ['compra', 'produto']})
        res.json(detCompra)
    }

    static async createDetCompra(req, res){
        const {quantidade, valor} = req.body
        if (!quantidade || !valor) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdDetCompra = await DetCompras.create(req.body)
        res.json(createdDetCompra)
    }

    static async getDetCompraById(req, res){
        const id = parseInt(req.params.id)
        const detCompra = await DetCompras.findByPk(id, {include: ['compra', 'produto']})
        if(!detCompra){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        res.status(200).json(detCompra)
    }

    static async destroyDetCompra(req,res){
        const id = parseInt(req.params.id)
        const detCompra = await DetCompras.findByPk(id)
        if(!detCompra){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await DetCompras.destroy({where: {id: detCompra.id}})
        res.json({message: "Removido com sucesso!"})
    }

    static async updateDetCompra(req, res){
        const id = parseInt(req.params.id)
        const detCompra = await DetCompras.findByPk(id)
        if(!detCompra){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {quantidade, valor} = req.body
        if (!quantidade || !valor) {
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedDetCompra = await DetCompras.update({quantidade, valor}, {where: {id: detCompra.id}})
        res.json(updatedDetCompra)
    }

}

export default DetComprasController