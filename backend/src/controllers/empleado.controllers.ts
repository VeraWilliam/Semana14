import express, { Request, Response } from "express";
import { Coneccion } from "../bd/database";
import { Iempleado } from "../interface/Empleado";

const conection: Coneccion = new Coneccion();

// controlador de getcargos( funcion logica de peticion)
export async function getEmpleados(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await conection.getConneccion();
        const empleados = await conn.query("SELECT * FROM empleado");
        return res.json(empleados[0]);
    }
    catch (err) {
        console.log(err);
    }
};


export async function createEmpleado(req: Request, res: Response) {
    try {
        const modEmpleado: Iempleado = req.body;
        console.log(modEmpleado);
        const conn = await conection.getConneccion();
        const empleados = await conn.query("INSERT INTO empleado SET ?", [modEmpleado]);
        res.json({ msg: "Empleado insertado Satisfactoriamente", cargo: modEmpleado });
    } catch (err) {
        console.log(err);
    }
}


export async function getEmpleado(req: Request, res: Response) {
    const id = req.params.empleadoId;
    const conn = await conection.getConneccion();
    const empleado = await conn.query("SELECT * FROM empleado WHERE id = ?", [id]);

    res.json(empleado[0]);
}


export async function deleteEmpleado(req: Request, res: Response) {
    const id = req.params.empleadoId;
    console.log(req.params);
    const conn = await conection.getConneccion();
    await conn.query("DELETE FROM empleado WHERE id = ?", [id]);
    res.json({
        message: "empleado eliminado",
        id,
    });
}


export async function updateEmpleado(req: Request, res: Response) {
    const id = req.params.empleadoId;
    const modEmpleado: Iempleado = req.body;
    const conn = await conection.getConneccion();
    await conn.query("UPDATE empleado set ? WHERE id = ?", [modEmpleado, id]);
    res.json({
        message: "Empleado actualizado",
        modEmpleado,
    });
}


