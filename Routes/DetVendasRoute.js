import express from "express"
import DetVendasController from "../Controller/DetVendasController.js"

const DetVendasRouter = express.Router()

DetVendasRouter.get("/", DetVendasController.getDetVenda)
DetVendasRouter.post("/", DetVendasController.createDetVenda)
DetVendasRouter.get("/:idPedido", DetVendasController.getDetPedidoVendaById)
DetVendasRouter.delete("/:idPedido", DetVendasController.destroyDetPedidoVenda)
DetVendasRouter.put("/:idPedido", DetVendasController.updateDetPedidoVenda)

export default DetVendasRouter
