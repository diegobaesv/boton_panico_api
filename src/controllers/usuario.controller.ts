import { BaseResponse } from "../shared/base-response";
import * as usuarioService from "../services/usuario.service";
import { Request, Response } from "express";

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