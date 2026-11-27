// .\src\models\usuario.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    correo: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
    },
    contrasenaHash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    celular: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    imgFoto: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    rolSistema: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    verificado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    bloqueado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    motivoBloqueo: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

export default Usuario;