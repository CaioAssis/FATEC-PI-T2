import express from "express"
import VendasController from "../Controller/VendasController.js"

const VendasRouter = express.Router()

VendasRouter.get("/", VendasController.getVendas)
VendasRouter.post("/", VendasController.createVenda)
VendasRouter.get("/:idPedido", VendasController.getVendaById)
VendasRouter.delete("/:idPedido", VendasController.destroyVenda)
VendasRouter.put("/:idPedido", VendasController.updateVenda)

export default VendasRouter
