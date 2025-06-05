import AppDataSource from "../config/appdatasource";
import { Incidencia } from "../entities/incidencia";

const repository = AppDataSource.getRepository(Incidencia);

export const insertarIncidencia = async (incencia: Partial<Incidencia>) => {
    await repository.save(incencia);
}