// .\src\models\estudiante.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Usuario',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    carreraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Carrera',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    ciclo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genero: {
        type: DataTypes.CHAR(1),
        allowNull: false,
    },
    avisoCorreoNuevasActividades: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    avisoCorreoAvancesListaEspera: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    avisoCorreoResumenSemanalCartelera: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});

export default Estudiante;