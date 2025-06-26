import { Router } from "express";
import { insertarUsuario } from "../controllers/usuario.controller";

const router: Router = Router();
router.post('/', insertarUsuario);

export default router;