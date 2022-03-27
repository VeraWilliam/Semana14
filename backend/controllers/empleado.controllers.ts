import express, { Request, Response } from "express";
import { connect } from "../src/database";

// controlador de getcargos( funcion logica de peticion)
export async function getEmpleados(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const empleados = await conn.query("SELECT * FROM empleado");
        return res.json(empleados[0]);
    }
    catch (err) {
        console.log(err);
    }
};