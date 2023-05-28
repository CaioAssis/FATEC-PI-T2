import { Sequelize } from "sequelize"
import db from "../db.js"

const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fichaTecnica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unidadeMedida: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valorEntrada: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    valorVenda: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

export default Produto