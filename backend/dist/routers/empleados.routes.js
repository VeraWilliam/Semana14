"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar ruter
const express_1 = require("express");
const empleado_controllers_1 = require("../controllers/empleado.controllers");
// instaciar router - ruteador
const routerEmpleado = (0, express_1.Router)();
// crear rutas de cargos
routerEmpleado.route("/").get(empleado_controllers_1.getEmpleados);
exports.default = routerEmpleado;
