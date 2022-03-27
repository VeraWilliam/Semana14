"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar ruter
const express_1 = require("express");
const cargo_controllers_1 = require("../controllers/cargo.controllers");
// import { Coneccion } from "../src/database";
// instaciar router - ruteador
const routerCargo = (0, express_1.Router)();
// crear rutas de cargos
routerCargo.route("/")
    .get(cargo_controllers_1.getCargos);
exports.default = routerCargo;
