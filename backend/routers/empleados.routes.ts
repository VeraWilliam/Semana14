// importar ruter
import { Router } from "express";
import { getEmpleados } from "../controllers/empleado.controllers";
import { connect } from "../src/database";
// instaciar router - ruteador
const router3 = Router();
// crear rutas de cargos
router3.route("/").get(getEmpleados);


export default router3