// .\src\models\tokenRestablecimiento.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const TokenRestablecimiento = sequelize.define('TokenRestablecimiento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaExpiracion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    utilizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuario',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
});

export default TokenRestablecimiento;