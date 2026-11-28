// .\src\models\tipo.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Tipo = sequelize.define('Tipo', {
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

export default Tipo;