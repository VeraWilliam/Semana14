// importar ruter
import { Router } from "express";
import { getCargos } from "../controllers/cargo.controllers";
// import { Coneccion } from "../src/database";
// instaciar router - ruteador
const routerCargo = Router();
// crear rutas de cargos
routerCargo.route("/")
    .get(getCargos);

export default routerCargo