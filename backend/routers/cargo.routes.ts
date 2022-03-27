// importar ruter
import { Router } from "express";
import { getCargos } from "../controllers/cargo.controllers";
import { connect } from "../src/database";
// instaciar router - ruteador
const router1 = Router();
// crear rutas de cargos
router1.route("/")
    .get(getCargos);

export default router1