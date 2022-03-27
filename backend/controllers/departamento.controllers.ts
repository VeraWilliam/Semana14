import express, { Request, Response } from "express";
import { connect } from "../src/database";

// controlador de getcargos( funcion logica de peticion)
export async function getDepartamentos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const departamentos = await conn.query("SELECT * FROM departamento");
        return res.json(departamentos[0]);
    }
    catch (err) {
        console.log(err);
    }
};