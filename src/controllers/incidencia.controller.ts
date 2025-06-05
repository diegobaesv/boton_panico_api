import { Request, Response } from "express";
import { Incidencia } from "../entities/incidencia";
import * as incidenciaService from "../services/incidencia.service";

export const insertarIncidencia = async (req: Request, res: Response) => {
    try {
        const incidencia: Partial<Incidencia> = req.body;
        await incidenciaService.insertarIncidencia(incidencia);
    }catch (error) {
        res.status(500).json({ message: "Error al insertar incidencia" });
    }
}
