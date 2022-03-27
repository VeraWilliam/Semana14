// importar ruter
import { Router } from "express";
import { getEmpleados } from "../controllers/empleado.controllers";
import { Coneccion } from "../bd/database";
// instaciar router - ruteador
const routerEmpleado = Router();
// crear rutas de cargos
routerEmpleado.route("/").get(getEmpleados);


export default routerEmpleado