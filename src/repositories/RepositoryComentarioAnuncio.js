// .\src\repositories\RepositoryComentarioAnuncio.js
// H6
import { ComentarioAnuncio, Anuncio, Usuario } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(ComentarioAnuncio);

const includeCompleto = [
    {
        model: Anuncio,
        attributes: ['id', 'titulo']
    },
    {
        model: Usuario,
        attributes: ['id', 'nombres', 'apellidos', 'correo', 'imgFoto']
    }
];

// se modifica porque pertenece a Anuncio y Usuario
repository.findAll = async () => {
    try {
        return await ComentarioAnuncio.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await ComentarioAnuncio.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
