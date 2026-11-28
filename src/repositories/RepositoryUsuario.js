// .\src\repositories\RepositoryUsuario.js
// H1
import { Usuario, Estudiante } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Usuario);

const includeCompleto = {
    model: Estudiante,
    attributes: ['id', 'carreraId', 'ciclo', 'genero']
};

// se modifica porque tiene relacion hasOne con Estudiante
repository.findAll = async () => {
    try {
        return await Usuario.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await Usuario.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

// busqueda por correo para login y registro
repository.findByCorreo = async (correo) => {
    try {
        return await Usuario.findOne({
            where: { correo: correo },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
