import AppDataSource from "../config/appdatasource";
import { TipoIncidencia } from "../entities/tipo-incidencia";

const repository = AppDataSource.getRepository(TipoIncidencia);

export const listarTipoIncidencias = async () => {
    return await repository.find();
}