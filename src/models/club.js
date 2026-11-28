// .\src\models\club.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Club = sequelize.define('Club', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    slug: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    siglas: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    anioFundacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descripcionCorta: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descripcionLarga: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    mision: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING(120),
        allowNull: false,
    },
    instagram: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    lugarHabitual: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    imgPortada: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    imgPortadaAlt: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    imgLogotipo: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    destacado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    modalidadIngreso: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    aceptarNoMiembrosActividades: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    pedirMensajePresentacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    detalleIngreso: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categoria',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
});

export default Club;