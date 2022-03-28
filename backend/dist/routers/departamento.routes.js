"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamento_controllers_1 = require("../controllers/departamento.controllers");
const router = (0, express_1.Router)();
router.route("/")
    .get(departamento_controllers_1.getDepartamentos);
// router.route("/:departamentoId")
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
