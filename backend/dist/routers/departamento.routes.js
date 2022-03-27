"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar ruter
const express_1 = require("express");
const departamento_controllers_1 = require("../controllers/departamento.controllers");
// import { Coneccion } from "../src/database";
// instaciar router - ruteador
const routerDepartamento = (0, express_1.Router)();
// crear rutas de cargos
routerDepartamento.route("/").get(departamento_controllers_1.getDepartamentos);
exports.default = routerDepartamento;
