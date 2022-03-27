// importar ruter
import { Router } from "express";
import { getDepartamentos } from "../controllers/departamento.controllers";
// import { Coneccion } from "../src/database";
// instaciar router - ruteador
const routerDepartamento = Router();
// crear rutas de cargos
routerDepartamento.route("/").get(getDepartamentos);

export default routerDepartamento