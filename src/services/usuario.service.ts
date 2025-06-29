import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import { EstadoAuditoria } from "../enums/EstadoAuditoria";
import { encryptPassword } from "../shared/util";

const repository = AppDataSource.getRepository(Usuario);

export const insertarUsuario = async (usuario: Partial<Usuario>) => {
    usuario.clave = await encryptPassword(usuario.clave || '123456');
    await repository.save(usuario);
}

export const obtenerUsuarioPorDocumentoYRol = async (numeroDocumento: string, idRol: number) => {
    return await repository.findOne({
        where: {
            numeroDocumento: numeroDocumento,
            rol: {
                idRol: idRol
            },
            estadoAuditoria: EstadoAuditoria.ACTIVO
        }
    });
}