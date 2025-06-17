import { BaseResponse } from "../shared/base-response";
import * as tipoIncidenciaService from "../services/tipo-incidencia.service";
import { MensajeController } from "../shared/constants";
import { Request, Response } from "express";

export const listarTipoIncidencias = async (req: Request, res: Response) => {
    try {
        const tipoIncidencias = await tipoIncidenciaService.listarTipoIncidencias();
        res.json(BaseResponse.success(tipoIncidencias));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
