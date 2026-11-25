import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const RolInterno = sequelize.define('RolInterno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreM: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  nombreF: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  esUnico: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

export default RolInterno;