// .\src\models\galeria.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Galeria = sequelize.define('Galeria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imgGaleria: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    clubId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Club',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
});

export default Galeria;