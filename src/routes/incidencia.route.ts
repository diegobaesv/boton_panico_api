import { Router } from "express";
import { insertarIncidencia, listarIncidencias } from "../controllers/incidencia.controller";

const router: Router = Router();
router.post('/', insertarIncidencia);
router.get('/',listarIncidencias);

export default router;