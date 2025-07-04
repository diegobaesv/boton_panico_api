import AppDataSource from "../config/appdatasource";
import { Incidencia } from "../entities/incidencia";
import { EstadoAuditoria } from "../enums/EstadoAuditoria";

const repository = AppDataSource.getRepository(Incidencia);

export const insertarIncidencia = async (incencia: Partial<Incidencia>) => {
    await repository.save(incencia);
}

export const listarIncidencias = async () => {
    return await repository.find({
        where: {
            estadoAuditoria: EstadoAuditoria.ACTIVO
        },
        relations: ['estadoIncidencia', 'tipoIncidencia']
    });
}