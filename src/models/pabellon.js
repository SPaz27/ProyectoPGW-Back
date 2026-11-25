import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const LugarActividad = sequelize.define('lugarActividad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
});

export default LugarActividad;