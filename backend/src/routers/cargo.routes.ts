// importar router
import { Router } from "express";
// importacion de controladores(funciones) de cargo
import { createCargo, deleteCargo, getCargo, getCargos, updateCargo } from "../controllers/cargo.controllers";
// instanciar router - ruteador
const router = Router();
// rutas de cargos con "/"
router.route("/")
    .get(getCargos)
    .post(createCargo);

// rutas de cargos con un id "/:cargoId"
router.route("/:cargoId")
    .get(getCargo)
    .delete(deleteCargo)
    .put(updateCargo)




export default router