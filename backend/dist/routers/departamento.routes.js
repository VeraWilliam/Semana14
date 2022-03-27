"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar ruter
const express_1 = require("express");
const departamento_controllers_1 = require("../controllers/departamento.controllers");
// instaciar router - ruteador
const router2 = (0, express_1.Router)();
// crear rutas de cargos
router2.route("/").get(departamento_controllers_1.getDepartamentos);
exports.default = router2;
