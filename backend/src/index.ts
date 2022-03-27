// importamos express
import express, { Application, Request, Response } from "express"
import { connect } from "./database"
import morgan from "morgan"
import router1 from "../routers/cargo.routes";
import router2 from "../routers/departamento.routes";
import router3 from "../routers/empleados.routes";
// creamos el servidor local
const app: Application = express();
// morgan en Middleware de nivel de solicitud
app.use(morgan("dev"))
// middleware: funciones que se ejecutan como un hilo
app.use(express.json());
// rutas del servidor
app.get("/", (req, res) => {
    res.send("Bienvenidos a mi app")
});
app.use("/cargos", router1);
app.use("/departamentos", router2);
app.use("/empleados", router3);
// ejecuto mi servidor
app.listen(3000, () => {
    console.log("Ejecutando en el servidor en el puerto 3000")
})