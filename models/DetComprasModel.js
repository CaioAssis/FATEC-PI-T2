import { Sequelize } from "sequelize"
import db from "../db.js"

const detCompras = db.define("detCompras", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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

export default detCompras