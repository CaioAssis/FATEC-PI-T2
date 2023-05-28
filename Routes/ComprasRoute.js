import express from "express"
import ComprasController from "../Controller/ComprasController.js"

const ComprasRouter = express.Router()

ComprasRouter.get("/", ComprasController.getCompras)
ComprasRouter.post("/", ComprasController.createCompra)
ComprasRouter.get("/:id", ComprasController.getCompraById)
ComprasRouter.delete("/:id", ComprasController.destroyCompra)
ComprasRouter.put("/:id", ComprasController.updateCompra)

export default ComprasRouter
