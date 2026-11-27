// .\src\models\estudianteInteres.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const EstudianteInteres = sequelize.define('EstudianteInteres', {
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
  interesId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Interes',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
});

export default EstudianteInteres;