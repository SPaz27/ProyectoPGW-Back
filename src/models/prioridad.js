// .\src\models\prioridad.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Prioridad = sequelize.define('Prioridad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
});

export default Prioridad;