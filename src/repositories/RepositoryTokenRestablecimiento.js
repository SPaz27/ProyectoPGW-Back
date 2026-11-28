// .\src\repositories\RepositoryTokenRestablecimiento.js
// H1
import { TokenRestablecimiento, Usuario } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(TokenRestablecimiento);

const includeCompleto = {
    model: Usuario,
    attributes: ['id', 'correo', 'nombres', 'apellidos']
};

// se modifica porque pertenece a Usuario
repository.findAll = async () => {
    try {
        return await TokenRestablecimiento.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await TokenRestablecimiento.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

// busqueda por token para validar restablecimiento de contrasena
repository.findByToken = async (token) => {
    try {
        return await TokenRestablecimiento.findOne({
            where: { token: token },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
