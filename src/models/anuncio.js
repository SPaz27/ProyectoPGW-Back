// .\src\models\anuncio.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Anuncio = sequelize.define('Anuncio', {
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
    fijarAnuncio: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    visibilidad: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    fechaPublicacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    horaPublicacion: {
        type: DataTypes.TIME,
        allowNull: false,
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
    prioridadId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Prioridad',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    autorId: {
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

export default Anuncio;