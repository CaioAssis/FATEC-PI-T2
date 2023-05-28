import express from "express"
import db from "./db.js"

import ClienteRouter from "./Routes/ClienteRoute.js"
import ProdutoRouter from "./Routes/ProdutoRoute.js"
import ComprasRouter from "./Routes/ComprasRoute.js"
import DetComprasRouter from "./Routes/DetComprasRoute.js"
import VendasRouter from "./Routes/VendasRoute.js"
import DetVendasRouter from "./Routes/DetVendasRoute.js"
import FornecedorRouter from "./Routes/FornecedorRoute.js"

const app = express()
app.use(express.json())

db.sync(() => console.log("Banco de dados preparado"))

app.use("/clientes", ClienteRouter)
app.use("/produtos", ProdutoRouter)
app.use("/compras", ComprasRouter)
app.use("/detalhesCompras", DetComprasRouter)
app.use("/vendas", VendasRouter)
app.use("/detalhesVendas", DetVendasRouter)
app.use("/fornecedores", FornecedorRouter)

const port = process.env.PORT || 3000

app.listen(3000, () => console.log("API Rodando na porta 3000"))
