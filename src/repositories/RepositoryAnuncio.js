// .\src\repositories\RepositoryAnuncio.js
// H6
import { Anuncio, Club, Prioridad, Usuario } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Anuncio);

const includeCompleto = [
    {
        model: Club,
        attributes: ['id', 'nombre', 'slug']
    },
    {
        model: Prioridad,
        attributes: ['id', 'nombre']
    },
    {
        model: Usuario,
        attributes: ['id', 'nombres', 'apellidos', 'correo', 'imgFoto']
    }
];

// se modifica porque pertenece a Club, Prioridad y Usuario
repository.findAll = async () => {
    try {
        return await Anuncio.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await Anuncio.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
