// .\src\models\inscripcionActividad.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const InscripcionActividad = sequelize.define('InscripcionActividad', {
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
    actividadId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Actividad',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    estadoCupo: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    fechaInscripcion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    asistio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
});

export default InscripcionActividad;