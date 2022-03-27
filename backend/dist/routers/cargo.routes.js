"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar ruter
const express_1 = require("express");
const cargo_controllers_1 = require("../controllers/cargo.controllers");
// instaciar router - ruteador
const router1 = (0, express_1.Router)();
// crear rutas de cargos
router1.route("/")
    .get(cargo_controllers_1.getCargos);
exports.default = router1;
