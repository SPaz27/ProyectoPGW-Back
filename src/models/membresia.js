// .\src\models\membresia.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Membresia = sequelize.define('Membresia', {
    estudianteId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Estudiante',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    clubId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Club',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    tipoEstado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    rolInternoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'RolInterno',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    esDirectiva: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    esClubPrincipal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    mensajePresentacion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    fechaSolicitud: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    fechaIngreso: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    motivoRetiro: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    fechaRetiro: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
});

export default Membresia;