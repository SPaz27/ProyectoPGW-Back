import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Lugar = sequelize.define('lugar', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  pabellonId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'pabellon',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  }
});

export default Lugar;