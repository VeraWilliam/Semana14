"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importamos express
const express_1 = __importDefault(require("express"));
// creamos el servidor local
const app = (0, express_1.default)();
// rutas del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido al sitio web");
});
// ruta al servidor para los cargos
app.get("/cargo", (req, res) => {
    res.json("Formulario de cargos");
});
// ruta al servidor para los departamentos
app.get("/departamento", (req, res) => {
    res.json("Formulario de departamentos");
});
// ruta al servidor para los empleados
app.get("/empleado", (req, res) => {
    res.json("Formulario de empleados");
});
// ejecuto mi servidor
app.listen(3000, () => {
    console.log("Ejecutando en el servidor en el puerto 3000");
});
