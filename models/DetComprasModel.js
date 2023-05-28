import { Sequelize } from "sequelize"
import db from "../db.js"

const DetCompras = db.define("detCompras", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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

export default DetCompras