// .\src\models\actividad.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Actividad = sequelize.define('Actividad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    cupoMaximo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    horaInicio: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    horaFin: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    periodo: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    imgPortada: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    abiertaANoMiembros: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    motivoCancelacion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    fechaCancelacion: {
        type: DataTypes.DATEONLY,
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
    lugarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Lugar',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    tipoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Tipo',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    estadoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Estado',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
});

export default Actividad;