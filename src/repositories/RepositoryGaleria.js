// .\src\repositories\RepositoryGaleria.js
// H2
import { Galeria, Club } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Galeria);

const includeCompleto = {
    model: Club,
    attributes: ['id', 'nombre', 'slug']
};

// se modifica porque pertenece a Club
repository.findAll = async () => {
    try {
        return await Galeria.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await Galeria.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
