// .\src\repositories\RepositoryMembresia.js
// H3
import { Membresia, Estudiante, Club, RolInterno } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Membresia);

const includeCompleto = [
    {
        model: Estudiante,
        attributes: ['id', 'carreraId', 'ciclo', 'genero']
    },
    {
        model: Club,
        attributes: ['id', 'nombre', 'slug']
    },
    {
        model: RolInterno,
        attributes: ['id', 'nombreM', 'nombreF', 'esUnico']
    }
];

// se modifica porque pertenece a Estudiante, Club y RolInterno
repository.findAll = async () => {
    try {
        return await Membresia.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

// se modifica porque la clave primaria es compuesta (estudianteId, clubId)
repository.findOne = async (estudianteId, clubId) => {
    try {
        return await Membresia.findOne({
            where: { estudianteId: estudianteId, clubId: clubId },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.update = async (entity, estudianteId, clubId) => {
    try {
        return await Membresia.update(entity, {
            where: { estudianteId: estudianteId, clubId: clubId }
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.remove = async (estudianteId, clubId) => {
    try {
        return await Membresia.destroy({
            where: { estudianteId: estudianteId, clubId: clubId }
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
