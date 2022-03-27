import express, { Request, Response } from "express";
import { Coneccion } from "../bd/database";

const conection: Coneccion = new Coneccion();

// controlador de getcargos( funcion logica de peticion)
export async function getCargos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await conection.getConneccion();
        const cargos = await conn.query("SELECT * FROM cargo");
        return res.json(cargos[0]);
    }
    catch (err) {
        console.log(err);
    }
};