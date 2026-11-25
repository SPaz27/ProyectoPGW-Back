import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Interes = sequelize.define('Interes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  }
});

export default Interes;