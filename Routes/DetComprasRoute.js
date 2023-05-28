import express from "express"
import detcomprasController from "../Controller/DetComprasController.js"

const DetComprasRouter = express.Router()

DetComprasRouter.get("/", detcomprasController.getDetCompras)
DetComprasRouter.post("/", detcomprasController.createDetCompra)
DetComprasRouter.get("/:id", detcomprasController.getDetCompraById)
DetComprasRouter.delete("/:id", detcomprasController.destroyDetCompra)
DetComprasRouter.put("/:id", detcomprasController.updateDetCompra)

export default DetComprasRouter
