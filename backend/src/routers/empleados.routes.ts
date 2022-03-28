// importar ruter
import { Router } from "express";
import { createEmpleado, deleteEmpleado, getEmpleado, getEmpleados, updateEmpleado } from "../controllers/empleado.controllers";
// instaciar router - ruteador
const router = Router();
// crear rutas de cargos
router.route("/")
    .get(getEmpleados)
    .post(createEmpleado)

router.route("/:empleadoId")
    .get(getEmpleado)
    .delete(deleteEmpleado)
    .put(updateEmpleado)

export default router

