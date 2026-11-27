// .\src\models\carrera.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Carrera = sequelize.define('Carrera', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  }
});

export default Carrera;