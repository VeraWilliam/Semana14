"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar ruter
const express_1 = require("express");
const empleado_controllers_1 = require("../controllers/empleado.controllers");
// instaciar router - ruteador
const router = (0, express_1.Router)();
// crear rutas de cargos
router.route("/")
    .get(empleado_controllers_1.getEmpleados)
    .post(empleado_controllers_1.createEmpleado);
router.route("/:empleadoId")
    .get(empleado_controllers_1.getEmpleado)
    .delete(empleado_controllers_1.deleteEmpleado)
    .put(empleado_controllers_1.updateEmpleado);
exports.default = router;
