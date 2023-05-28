import express from "express"
import DetVendasController from "../Controller/DetVendasController.js"

const DetVendasRouter = express.Router()

DetVendasRouter.get("/", DetVendasController.getDetVendas)
DetVendasRouter.post("/", DetVendasController.createDetVenda)
DetVendasRouter.get("/:idPedido", DetVendasController.getDetVendaById)
DetVendasRouter.delete("/:idPedido", DetVendasController.destroyDetVenda)
DetVendasRouter.put("/:idPedido", DetVendasController.updateDetVenda)

export default DetVendasRouter
