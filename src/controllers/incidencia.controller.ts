import { Request, Response } from "express";
import { Incidencia } from "../entities/incidencia";
import * as incidenciaService from "../services/incidencia.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarIncidencia = async (req: Request, res: Response) => {
    try {
        const incidencia: Partial<Incidencia> = req.body;
        await incidenciaService.insertarIncidencia(incidencia);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarIncidencias = async (req: Request, res: Response) => {
    try {
        const incidencias = await incidenciaService.listarIncidencias();
        res.json(BaseResponse.success(incidencias));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}