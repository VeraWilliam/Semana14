"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importamos express
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cargo_routes_1 = __importDefault(require("../routers/cargo.routes"));
const departamento_routes_1 = __importDefault(require("../routers/departamento.routes"));
const empleados_routes_1 = __importDefault(require("../routers/empleados.routes"));
// creamos el servidor local
const app = (0, express_1.default)();
// morgan en Middleware de nivel de solicitud
app.use((0, morgan_1.default)("dev"));
// middleware: funciones que se ejecutan como un hilo
app.use(express_1.default.json());
// rutas del servidor
app.get("/", (req, res) => {
    res.send("Bienvenidos a mi app");
});
app.use("/cargos", cargo_routes_1.default);
app.use("/departamentos", departamento_routes_1.default);
app.use("/empleados", empleados_routes_1.default);
// ejecuto mi servidor
app.listen(3000, () => {
    console.log("Ejecutando en el servidor en el puerto 3000");
});
