"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar router
const express_1 = require("express");
// importacion de controladores(funciones) de cargo
const cargo_controllers_1 = require("../controllers/cargo.controllers");
// instanciar router - ruteador
const router = (0, express_1.Router)();
// rutas de cargos con "/"
router.route("/")
    .get(cargo_controllers_1.getCargos)
    .post(cargo_controllers_1.createCargo);
// rutas de cargos con un id "/:cargoId"
router.route("/:cargoId")
    .get(cargo_controllers_1.getCargo)
    .delete(cargo_controllers_1.deleteCargo)
    .put(cargo_controllers_1.updateCargo);
exports.default = router;
