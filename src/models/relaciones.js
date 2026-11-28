// .\src\models\relaciones.js
// H1
import Carrera from './carrera.js';
import Usuario from './usuario.js';
import Estudiante from './estudiante.js';
import Interes from './interes.js';
import EstudianteInteres from './estudianteInteres.js';
import TokenRestablecimiento from './tokenRestablecimiento.js';

// H2
import Categoria from './categoria.js';
import Club from './club.js';
import Galeria from './galeria.js';

// H3
import RolInterno from './rolInterno.js';
import Membresia from './membresia.js';

// H4
import Pabellon from './pabellon.js';
import Lugar from './lugar.js';
import Tipo from './tipo.js';
import Estado from './estado.js';
import Actividad from './actividad.js';

// H5
import InscripcionActividad from './inscripcionActividad.js';

// H6
import Prioridad from './prioridad.js';
import Anuncio from './anuncio.js';
import ComentarioAnuncio from './comentarioAnuncio.js';

// H7
import HistorialCambiosClub from './historialCambiosClub.js';

// H1
// usuarios 1 ----> 1 estudiantes
Usuario.hasOne(Estudiante, { foreignKey: 'id', onDelete: 'CASCADE' });
Estudiante.belongsTo(Usuario, { foreignKey: 'id' });

// carreras 1 ----> N estudiantes
Carrera.hasMany(Estudiante, { foreignKey: 'carreraId', onDelete: 'CASCADE' });
Estudiante.belongsTo(Carrera, { foreignKey: 'carreraId' });

// estudiantes 1 ----> N estudiante_intereses N <---- 1 intereses
Estudiante.hasMany(EstudianteInteres, { foreignKey: 'estudianteId', onDelete: 'CASCADE' });
EstudianteInteres.belongsTo(Estudiante, { foreignKey: 'estudianteId' });

Interes.hasMany(EstudianteInteres, { foreignKey: 'interesId', onDelete: 'CASCADE' });
EstudianteInteres.belongsTo(Interes, { foreignKey: 'interesId' });

// usuarios 1 ----> N tokens_restablecimiento
Usuario.hasMany(TokenRestablecimiento, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
TokenRestablecimiento.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// H2
// categorias 1 ----> N clubes
Categoria.hasMany(Club, { foreignKey: 'categoriaId', onDelete: 'CASCADE' });
Club.belongsTo(Categoria, { foreignKey: 'categoriaId' });

// clubes 1 ----> N galerias
Club.hasMany(Galeria, { foreignKey: 'clubId', onDelete: 'CASCADE' });
Galeria.belongsTo(Club, { foreignKey: 'clubId' });

// H3
// estudiantes 1 ----> N membresias N <---- 1 clubes
Estudiante.hasMany(Membresia, { foreignKey: 'estudianteId', onDelete: 'CASCADE' });
Membresia.belongsTo(Estudiante, { foreignKey: 'estudianteId' });

Club.hasMany(Membresia, { foreignKey: 'clubId', onDelete: 'CASCADE' });
Membresia.belongsTo(Club, { foreignKey: 'clubId' });

// roles_internos 1 ----> N membresias
RolInterno.hasMany(Membresia, { foreignKey: 'rolInternoId', onDelete: 'CASCADE' });
Membresia.belongsTo(RolInterno, { foreignKey: 'rolInternoId' });

// H4
// pabellones 1 ----> N lugares
Pabellon.hasMany(Lugar, { foreignKey: 'pabellonId', onDelete: 'CASCADE' });
Lugar.belongsTo(Pabellon, { foreignKey: 'pabellonId' });

// clubes 1 ----> N actividades
Club.hasMany(Actividad, { foreignKey: 'clubId', onDelete: 'CASCADE' });
Actividad.belongsTo(Club, { foreignKey: 'clubId' });

// lugares 1 ----> N actividades
Lugar.hasMany(Actividad, { foreignKey: 'lugarId', onDelete: 'CASCADE' });
Actividad.belongsTo(Lugar, { foreignKey: 'lugarId' });

// tipos 1 ----> N actividades
Tipo.hasMany(Actividad, { foreignKey: 'tipoId', onDelete: 'CASCADE' });
Actividad.belongsTo(Tipo, { foreignKey: 'tipoId' });

// estados 1 ----> N actividades
Estado.hasMany(Actividad, { foreignKey: 'estadoId', onDelete: 'CASCADE' });
Actividad.belongsTo(Estado, { foreignKey: 'estadoId' });

// H5
// estudiantes 1 ----> N inscripciones_actividad N <---- 1 actividades
Estudiante.hasMany(InscripcionActividad, { foreignKey: 'estudianteId', onDelete: 'CASCADE' });
InscripcionActividad.belongsTo(Estudiante, { foreignKey: 'estudianteId' });

Actividad.hasMany(InscripcionActividad, { foreignKey: 'actividadId', onDelete: 'CASCADE' });
InscripcionActividad.belongsTo(Actividad, { foreignKey: 'actividadId' });

// H6
// clubes 1 ----> N anuncios
Club.hasMany(Anuncio, { foreignKey: 'clubId', onDelete: 'CASCADE' });
Anuncio.belongsTo(Club, { foreignKey: 'clubId' });

// prioridades 1 ----> N anuncios
Prioridad.hasMany(Anuncio, { foreignKey: 'prioridadId', onDelete: 'CASCADE' });
Anuncio.belongsTo(Prioridad, { foreignKey: 'prioridadId' });

// usuarios 1 ----> N anuncios
Usuario.hasMany(Anuncio, { foreignKey: 'autorId', onDelete: 'CASCADE' });
Anuncio.belongsTo(Usuario, { foreignKey: 'autorId' });

// anuncios 1 ----> N comentarios_anuncio N <---- 1 usuarios
Anuncio.hasMany(ComentarioAnuncio, { foreignKey: 'anuncioId', onDelete: 'CASCADE' });
ComentarioAnuncio.belongsTo(Anuncio, { foreignKey: 'anuncioId' });

Usuario.hasMany(ComentarioAnuncio, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
ComentarioAnuncio.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// H7
// clubes 1 ----> N historial_cambios_club N <---- 1 usuarios
Club.hasMany(HistorialCambiosClub, { foreignKey: 'clubId', onDelete: 'CASCADE' });
HistorialCambiosClub.belongsTo(Club, { foreignKey: 'clubId' });

Usuario.hasMany(HistorialCambiosClub, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
HistorialCambiosClub.belongsTo(Usuario, { foreignKey: 'usuarioId' });

export {
    Carrera,
    Usuario,
    Estudiante,
    Interes,
    EstudianteInteres,
    TokenRestablecimiento,
    Categoria,
    Club,
    Galeria,
    RolInterno,
    Membresia,
    Pabellon,
    Lugar,
    Tipo,
    Estado,
    Actividad,
    InscripcionActividad,
    Prioridad,
    Anuncio,
    ComentarioAnuncio,
    HistorialCambiosClub,
};