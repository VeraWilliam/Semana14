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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importamos express
const express_1 = __importDefault(require("express"));
// importamos el archivo database
const database_1 = require("./database");
// creamos el servidor local
const app = (0, express_1.default)();
// rutas del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido a  mi Pagina Principal");
});
// ruta al servidor para los cargos
app.get("/cargo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // genero una conexion
    const conn = yield (0, database_1.connect)();
    // traigo los cargos de la base de datos
    const cargos = yield conn.query("SELECT * FROM cargo");
    // en la posicion 0 me trae los datos en forma de arreglo
    res.json(cargos[0]);
}));
// ruta al servidor para los departamentos
app.get("/departamento", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // genero una conexion
    const conn = yield (0, database_1.connect)();
    // traigo los departamentos de la base de datos
    const departamentos = yield conn.query("SELECT * FROM DEPARTAMENTO");
    // en la posicion 0 me trae los datos en forma de arreglo
    res.json(departamentos[0]);
}));
// ruta al servidor para los empleados
app.get("/empleado", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // genero una conexion
    const conn = yield (0, database_1.connect)();
    // traigo los empleados de la base de datos
    const empleados = yield conn.query("SELECT e.id, e.nombre, e.sueldo,c.descripcion AS cargo FROM empleado e INNER JOIN cargo c ON e.cargoID = c.id");
    // en la posicion 0 me trae los datos en forma de arreglo
    res.json(empleados[0]);
}));
// ejecuto mi servidor
app.listen(3000, () => {
    console.log("Ejecutando en el servidor en el puerto 3000");
});
