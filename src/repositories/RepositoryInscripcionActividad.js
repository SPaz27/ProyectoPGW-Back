// .\src\repositories\RepositoryInscripcionActividad.js
// H5
import { InscripcionActividad, Estudiante, Actividad } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(InscripcionActividad);

const includeCompleto = [
    {
        model: Estudiante,
        attributes: ['id', 'carreraId', 'ciclo']
    },
    {
        model: Actividad,
        attributes: ['id', 'titulo', 'fecha', 'horaInicio', 'horaFin']
    }
];

// se modifica porque pertenece a Estudiante y Actividad
repository.findAll = async () => {
    try {
        return await InscripcionActividad.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

// se modifica porque la clave primaria es compuesta (estudianteId, actividadId)
repository.findOne = async (estudianteId, actividadId) => {
    try {
        return await InscripcionActividad.findOne({
            where: { estudianteId: estudianteId, actividadId: actividadId },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.update = async (entity, estudianteId, actividadId) => {
    try {
        return await InscripcionActividad.update(entity, {
            where: { estudianteId: estudianteId, actividadId: actividadId }
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.remove = async (estudianteId, actividadId) => {
    try {
        return await InscripcionActividad.destroy({
            where: { estudianteId: estudianteId, actividadId: actividadId }
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
