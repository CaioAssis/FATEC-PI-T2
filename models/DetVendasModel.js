import { Sequelize } from "sequelize"
import db from "../db.js"

const detVendas = db.define("detVendas", {
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
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
})

export default detVendas