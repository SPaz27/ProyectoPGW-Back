// .\src\repositories\RepositoryActividad.js
// H4
import { Actividad, Club, Lugar, Tipo, Estado } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Actividad);

const includeCompleto = [
    {
        model: Club,
        attributes: ['id', 'nombre', 'slug']
    },
    {
        model: Lugar,
        attributes: ['id', 'nombre', 'pabellonId']
    },
    {
        model: Tipo,
        attributes: ['id', 'nombre']
    },
    {
        model: Estado,
        attributes: ['id', 'nombre']
    }
];

// se modifica porque pertenece a Club, Lugar, Tipo y Estado
repository.findAll = async () => {
    try {
        return await Actividad.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await Actividad.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
