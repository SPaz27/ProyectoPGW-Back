import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Estado = sequelize.define('Estado', {
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

export default Estado;