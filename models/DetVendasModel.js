import { Sequelize } from "sequelize"
import db from "../db.js"

const detCompras = db.define("detVendas", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descricaoPedido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantidade: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
})

export default detVendas