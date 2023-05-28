import express from "express"
import VendasController from "../Controller/VendasController.js"

const VendasRouter = express.Router()

VendasRouter.get("/", VendasController.getVenda)
VendasRouter.post("/", VendasController.createVenda)
VendasRouter.get("/:idPedido", VendasController.getPedidoVendaById)
VendasRouter.delete("/:idPedido", VendasController.destroyPedidoVenda)
VendasRouter.put("/:idPedido", VendasController.updatePedidoVenda)

export default VendasRouter
