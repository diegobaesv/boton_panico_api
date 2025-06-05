import { Router } from "express";
import { insertarIncidencia } from "../controllers/incidencia.controller";

const router: Router = Router();
router.post('/', insertarIncidencia);

export default router;