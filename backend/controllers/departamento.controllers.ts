import express, { Request, Response } from "express";
import { Coneccion } from "../src/database";

const conection: Coneccion = new Coneccion();

// controlador de getcargos( funcion logica de peticion)
export async function getDepartamentos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await conection.getConneccion();
        const departamentos = await conn.query("SELECT * FROM departamento");
        return res.json(departamentos[0]);
    }
    catch (err) {
        console.log(err);
    }
};