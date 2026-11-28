// .\src\models\historialCambiosClub.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const HistorialCambiosClub = sequelize.define('HistorialCambiosClub', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fechaCambio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    accion: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    motivo: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    clubId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Club',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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

export default HistorialCambiosClub;