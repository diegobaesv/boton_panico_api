import AppDataSource from "../config/appdatasource";
import { TipoIncidencia } from "../entities/tipo-incidencia";

const repository = AppDataSource.getRepository(TipoIncidencia);

export const listarTipoIncidencias = async (flagBoton: string) => {
    return await repository.find({
        where: {
            //flagBoton: flagBoton === 'true' ? '1' : '0',
            estadoAuditoria: '1'
        }
    });
}