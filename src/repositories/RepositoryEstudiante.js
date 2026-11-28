// .\src\repositories\RepositoryEstudiante.js
// H1
import { Estudiante, Usuario, Carrera, EstudianteInteres } from '../models/relaciones.js';
import RepositoryBase from './RepositoryBase.js';

const repository = new RepositoryBase(Estudiante);

const includeCompleto = [
    {
        model: Usuario,
        attributes: ['id', 'correo', 'nombres', 'apellidos', 'celular', 'imgFoto', 'rolSistema']
    },
    {
        model: Carrera,
        attributes: ['id', 'nombre']
    },
    {
        model: EstudianteInteres,
        attributes: ['estudianteId', 'interesId']
    }
];

// se modifica porque pertenece a Usuario y Carrera, y tiene EstudianteInteres
repository.findAll = async () => {
    try {
        return await Estudiante.findAll({
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

repository.findOne = async (id) => {
    try {
        return await Estudiante.findOne({
            where: { id: id },
            include: includeCompleto
        });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default repository;
