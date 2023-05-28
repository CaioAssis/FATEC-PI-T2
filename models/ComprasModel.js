import { Sequelize } from "sequelize"
import db from "../db.js"

const Compras = db.define('compras',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dataPedido: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataEntrega: {
        type: Sequelize.DATE,
        allowNull: false
    },
    totalPedido: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    formaPagamento: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
})


export default Compras