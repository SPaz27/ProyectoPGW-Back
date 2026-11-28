// .\src\repositories\RepositoryHistorialCambiosClub.js
// H7
import { HistorialCambiosClub, Club, Usuario } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(HistorialCambiosClub);

const includeCompleto = [
    {
        model: Club,
        attributes: ['id', 'nombre', 'slug']
    },
    {
        model: Usuario,
        attributes: ['id', 'nombres', 'apellidos', 'correo']
    }
];

// se modifica porque pertenece a Club y Usuario
repository.findAll = async () => {
    try {
        return await HistorialCambiosClub.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await HistorialCambiosClub.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
