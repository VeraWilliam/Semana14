"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpleados = void 0;
const database_1 = require("../bd/database");
const conection = new database_1.Coneccion();
// controlador de getcargos( funcion logica de peticion)
function getEmpleados(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield conection.getConneccion();
            const empleados = yield conn.query("SELECT * FROM empleado");
            return res.json(empleados[0]);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getEmpleados = getEmpleados;
;
