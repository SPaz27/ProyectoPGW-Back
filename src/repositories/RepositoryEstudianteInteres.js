// .\src\repositories\RepositoryEstudianteInteres.js
// H1
import { EstudianteInteres, Estudiante, Interes } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(EstudianteInteres);

const includeCompleto = [
    {
        model: Estudiante,
        attributes: ['id', 'carreraId', 'ciclo']
    },
    {
        model: Interes,
        attributes: ['id', 'nombre']
    }
];

// se modifica porque pertenece a Estudiante e Interes
repository.findAll = async () => {
    try {
        return await EstudianteInteres.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

// se modifica porque la clave primaria es compuesta (estudianteId, interesId)
repository.findOne = async (estudianteId, interesId) => {
    try {
        return await EstudianteInteres.findOne({
            where: { estudianteId: estudianteId, interesId: interesId },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.remove = async (estudianteId, interesId) => {
    try {
        return await EstudianteInteres.destroy({
            where: { estudianteId: estudianteId, interesId: interesId }
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
