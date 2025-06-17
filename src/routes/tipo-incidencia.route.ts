import { Router } from "express";
import { listarTipoIncidencias } from "../controllers/tipo-incidencia.controller";

const router: Router = Router();
router.get('/', listarTipoIncidencias);

export default router;