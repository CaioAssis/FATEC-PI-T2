import { Sequelize } from "sequelize"
import db from "../db.js"

const Compras = db.define("Compras", {
    idPedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idFornecedor: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnpj: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    dataPedido: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    dataEntrega: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    totalPedido: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    formaPagamento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

export default Compras

/*export class Compras {
    constructor(
        idpedido,
        idfornecedor,
        nome,
        cnpj,
        telefone,
        dataPedido,
        dataEntrega,
        totalPedido,
        formaPagamento
    ) {
        this.idpedido = idpedido
        this.idfornecedor = idfornecedor
        this.nome = nome
        this.cnpj = cnpj
        this.telefone = telefone
        this.dataPedido = dataPedido
        this.dataEntrega = dataEntrega
        this.totalPedido = totalPedido
        this.formaPagamento = formaPagamento
    }
}

export const getAllCompras = () => {
    return dbCompras
}
export const createModelCompra = (compra) => {
    idAtual++
    compra.idpedido = idAtual
    dbCompras.push(compra)
    return compra
}

export const findComprasByPk = (idpedido) => {
    return dbCompras.find((compra) => compra.idpedido === idpedido)
}

export const destroyCompras = (idpedido) => {
    const compra = findComprasByPk(idpedido)
    if (!compra) {
        return false
    }
    const index = dbCompras.indexOf(compra)
    dbCompras.splice(index, 1)
    return true
}

export const updateCompras = (idpedido, compraUpdate) => {
    const compra = findComprasByPk(idpedido)
    if (!compra) {
        return false
    }
    const index = dbCompras.indexOf(compra)
    dbCompras[index] = compraUpdate
    return true
}
export const dbCompras = [
    new Compras(
        1,
        1,
        "NomeFornecedor1",
        "XX.XXX.XXX/0001-XX",
        "(XX) XXXX-XXXX",
        "01/04/2023",
        "30/04/2023",
        "X.XXX Reais",
        "Credito"
    ),
    new Compras(
        2,
        1,
        "NomeFornecedor2",
        "XX.XXX.XXX/0001-XX",
        "(XX) XXXX-XXXX",
        "01/05/2023",
        "30/05/2023",
        "X.XXX Reais",
        "Dinheiro"
    ),
    new Compras(
        3,
        1,
        "NomeFornecedor1",
        "XX.XXX.XXX/0001-XX",
        "(XX) XXXX-XXXX",
        "01/06/2023",
        "30/06/2023",
        "X.XXX Reais",
        "Debito"
    ),
]*/
