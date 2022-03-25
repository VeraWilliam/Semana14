// importamos express
import express, { Request, Response } from "express";
// importamos el archivo database
import { connect } from "./database";
// creamos el servidor local
const app = express()
// rutas del servidor
app.get("/", (req: Request, res: Response) => {
    res.send("Bienvenido al sitio web")
})
// ruta al servidor para los cargos
app.get("/cargo", async (req: Request, res: Response) => {
    // genero una conexion
    const conn = await connect()
    // traigo los cargos de la base de datos
    const cargos = await conn.query("SELECT * FROM CARGO");
    // en la posicion 0 me trae los datos en forma de arreglo
    res.json(cargos[0])
})
// ruta al servidor para los departamentos
app.get("/departamento", async (req: Request, res: Response) => {
    // genero una conexion
    const conn1 = await connect()
    // traigo los departamentos de la base de datos
    const departamentos = await conn1.query("SELECT * FROM DEPARTAMENTO");
    // en la posicion 0 me trae los datos en forma de arreglo
    res.json(departamentos[0])
})
// ruta al servidor para los empleados
app.get("/empleado", async (req: Request, res: Response) => {
    // genero una conexion
    const conn2 = await connect()
    // traigo los empleados de la base de datos
    const empleados = await conn2.query("SELECT * FROM EMPLEADO");
    // en la posicion 0 me trae los datos en forma de arreglo
    res.json(empleados[0])
})
// ejecuto mi servidor
app.listen(3000, () => {
    console.log("Ejecutando en el servidor en el puerto 3000")
})