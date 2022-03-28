"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepartamentos = void 0;
const database_1 = require("../bd/database");
const conection = new database_1.Coneccion();
function getDepartamentos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield conection.getConneccion();
            const departamentos = yield conn.query("SELECT * FROM departamento");
            return res.json(departamentos[0]);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getDepartamentos = getDepartamentos;
;
// import express, { Request, Response } from "express";
// import { Coneccion } from "../bd/database";
// import { Idepartamento } from "../interface/Departamento";
// const conection: Coneccion = new Coneccion();
// // controlador de getcargos( funcion logica de peticion)
// export async function getDepartamentos(req: Request, res: Response): Promise<Response | void> {
//     try {
//         const conn = await conection.getConneccion();
//         const departamentos = await conn.query("SELECT * FROM departamento");
//         return res.json(departamentos[0]);
//     }
//     catch (err) {
//         console.log(err);
//     }
// };
// // creacion de un cargo
// export async function createDepartamento(req: Request, res: Response) {
//     try {
//         const modDepartamento: Idepartamento = req.body;
//         console.log(modDepartamento);
//         const conn = await conection.getConneccion();
//         const departamentos = await conn.query("INSERT INTO cargo SET ?", [modDepartamento]);
//         res.json({ msg: "Departamento insertado Satisfactoriamente", cargo: modDepartamento });
//     } catch (err) {
//         console.log(err);
//     }
// }
// // obtener un departamento mediante su id
// export async function getDepartamento(req: Request, res: Response) {
//     const id = req.params.departamentoId;
//     const conn = await conection.getConneccion();
//     const departamento = await conn.query("SELECT * FROM departamento WHERE id = ?", [id]);
//     //console.log(req.params departamentoId,id);
//     //res.json(req.params);
//     res.json(departamento[0]);
// }
// // eliminar un cargo mediante su id
// export async function deleteDepartamento(req: Request, res: Response) {
//     const id = req.params.departamentoId;
//     console.log(req.params);
//     const conn = await conection.getConneccion();
//     await conn.query("DELETE FROM departamento WHERE id = ?", [id]);
//     res.json({
//         message: "departamento eliminado",
//         id,
//     });
// }
// // actualizar o modificar o editar un departamento mediante su id
// export async function updateDepartamento(req: Request, res: Response) {
//     const id = req.params.departamentoId;
//     const modDepartamento: Idepartamento = req.body;
//     const conn = await conection.getConneccion();
//     await conn.query("UPDATE departamento set ? WHERE id = ?", [modDepartamento, id]);
//     res.json({
//         message: "Departamento actualizado",
//         modDepartamento,
//     });
// }
