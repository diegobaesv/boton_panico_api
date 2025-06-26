import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/usuario";

const repository = AppDataSource.getRepository(Usuario);

export const insertarUsuario = async (usuario: Partial<Usuario>) => {
    await repository.save(usuario);
}