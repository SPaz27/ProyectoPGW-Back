// .\src\repositories\RepositoryLugar.js
// H4
import { Lugar, Pabellon } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Lugar);

const includeCompleto = {
    model: Pabellon,
    attributes: ['id', 'nombre']
};

// se modifica porque pertenece a Pabellon
repository.findAll = async () => {
    try {
        return await Lugar.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await Lugar.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
