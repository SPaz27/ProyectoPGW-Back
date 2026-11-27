// .\src\models\comentarioAnuncio.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const ComentarioAnuncio = sequelize.define('ComentarioAnuncio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    anuncioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Anuncio',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuario',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
});

export default ComentarioAnuncio;