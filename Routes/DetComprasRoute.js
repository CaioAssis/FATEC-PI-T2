import express from "express"
import detcomprasController from "../Controller/DetComprasController.js"

const DetComprasRouter = express.Router()

DetComprasRouter.get("/", detcomprasController.getDetCompras)
DetComprasRouter.post("/", detcomprasController.createDetCompra)
DetComprasRouter.get("/:id", detcomprasController.getdetCompraById)
DetComprasRouter.delete("/:id", detcomprasController.destroydetCompra)
DetComprasRouter.put("/:id", detcomprasController.updatedetCompra)

export default DetComprasRouter
