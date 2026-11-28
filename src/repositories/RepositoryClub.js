// .\src\repositories\RepositoryClub.js
// H2
import { Club, Categoria, Galeria } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Club);

const includeCompleto = [
    {
        model: Categoria,
        attributes: ['id', 'nombre']
    },
    {
        model: Galeria,
        attributes: ['id', 'imgGaleria']
    }
];

// se modifica porque pertenece a Categoria y tiene Galeria
repository.findAll = async () => {
    try {
        return await Club.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await Club.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

// busqueda por slug para abrir el perfil del club
repository.findBySlug = async (slug) => {
    try {
        return await Club.findOne({
            where: { slug: slug },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
