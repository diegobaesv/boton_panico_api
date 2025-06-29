import { BaseResponse } from "../shared/base-response";
import * as usuarioService from "../services/usuario.service";
import { Request, Response } from "express";
import { comparePassword } from "../shared/util";
import { IdRol } from "../enums/IdRol";

export const loginUsuario = async (req: Request, res: Response) => {
    try {
        const { numeroDocumento, clave, rol } = req.body;
        const usuario = await usuarioService.obtenerUsuarioPorDocumentoYRol(numeroDocumento, IdRol[rol as string]);
        if (!usuario) {
            throw new Error("Usuario no encontrado");
        }
        const isPasswordValid = await comparePassword(clave, usuario.clave);
        if (!isPasswordValid) {
            throw new Error("Clave incorrecta");
        }
        usuario.clave = undefined;
        res.status(200).json(BaseResponse.success(usuario));
    } catch (error) {
        console.error(error);
        res.status(401).json(BaseResponse.error(error.message));
    }
}

export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        const usuario = req.body;
        const nuevoUsuario = await usuarioService.insertarUsuario(usuario);
        res.status(201).json(BaseResponse.success(nuevoUsuario));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}