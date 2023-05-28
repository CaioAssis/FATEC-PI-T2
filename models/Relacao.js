import Cliente from "../Models/ClienteModel.js"
import Compras from "../Models/ComprasModel.js"
import DetCompras from "../models/DetComprasModel.js"
import detVendas from "../models/DetVendasModel.js"
import DetVendas from "../models/DetVendasModel.js"
import Fornecedor from "../Models/FornecedorModel.js"
import Produto from "../Models/ProdutoModel.js"
import Vendas from "../models/VendasModel.js"

Fornecedor.hasMany(Compras)
Compras.belongsTo(Fornecedor)

Compras.hasMany(DetCompras)
DetCompras.belongsTo(Compras)

DetCompras.belongsTo(Produto)
Produto.hasMany(DetCompras)

Produto.hasMany(DetVendas)
DetVendas.belongsTo(Produto)

DetVendas.belongsTo(Vendas)
Vendas.hasMany(detVendas)

Vendas.belongsTo(Cliente)
Cliente.hasMany(Vendas)


export{Cliente, Compras, DetCompras, DetVendas, Fornecedor, Produto, Vendas}