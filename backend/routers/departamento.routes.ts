// importar ruter
import { Router } from "express";
import { getDepartamentos } from "../controllers/departamento.controllers";
import { connect } from "../src/database";
// instaciar router - ruteador
const router2 = Router();
// crear rutas de cargos
router2.route("/").get(getDepartamentos);

export default router2