// importamos express
import express, { Request, Response } from "express"
// creamos el servidor local
const app = express()
// rutas del servidor
app.get("/", (req: Request, res: Response) => {
    res.send("Bienvenido al sitio web")
})
// ruta al servidor para los cargos
app.get("/cargo", (req: Request, res: Response) => {
    res.json("Formulario de cargos")
})
// ruta al servidor para los departamentos
app.get("/departamento", (req: Request, res: Response) => {
    res.json("Formulario de departamentos")
})
// ruta al servidor para los empleados
app.get("/empleado", (req: Request, res: Response) => {
    res.json("Formulario de empleados")
})
// ejecuto mi servidor
app.listen(3000, () => {
    console.log("Ejecutando en el servidor en el puerto 3000")
})