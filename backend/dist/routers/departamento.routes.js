"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamento_controllers_1 = require("../controllers/departamento.controllers");
const router = (0, express_1.Router)();
router.route("/")
    .get(departamento_controllers_1.getDepartamentos)
    .post(departamento_controllers_1.createDepartamento);
router.route("/:departamentoId")
    .get(departamento_controllers_1.getDepartamento)
    .delete(departamento_controllers_1.deleteDepartamento)
    .put(departamento_controllers_1.updateDepartamento);
exports.default = router;
// // importar ruter
// import { Router } from "express";
// import { createDepartamento, deleteDepartamento, getDepartamento, getDepartamentos, updateDepartamento } from "../controllers/departamento.controllers";
// // import { Coneccion } from "../src/database";
// // instaciar router - ruteador
// const router = Router();
// // crear rutas de cargos
// router.route("/")
//     .get(getDepartamentos)
//     .post(createDepartamento);
// router.route("/:departamentoId")
//     .get(getDepartamento)
//     .delete(deleteDepartamento)
//     .put(updateDepartamento)
// export default router
