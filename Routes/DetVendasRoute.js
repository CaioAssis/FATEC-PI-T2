import express from "express"
import DetVendasController from "../Controller/DetVendasController.js"

const DetVendasRouter = express.Router()

DetVendasRouter.get("/", DetVendasController.getDetVendas)
DetVendasRouter.post("/", DetVendasController.createDetVenda)
DetVendasRouter.get("/:id", DetVendasController.getDetVendaById)
DetVendasRouter.delete("/:id", DetVendasController.destroyDetVenda)
DetVendasRouter.put("/:id", DetVendasController.updateDetVenda)

export default DetVendasRouter
