import { Router } from "express";

import { createDepartamento, deleteDepartamento, getDepartamento, getDepartamentos, updateDepartamento } from "../controllers/departamento.controllers";

const router = Router();

router.route("/")
    .get(getDepartamentos)
    .post(createDepartamento)


router.route("/:departamentoId")
    .get(getDepartamento)
    .delete(deleteDepartamento)
    .put(updateDepartamento)

export default router





// // importar ruter
// import { Router } from "express";
// import { createDepartamento, deleteDepartamento, getDepartamento, getDepartamentos, updateDepartamento } from "../controllers/departamento.controllers";
// // import { Coneccion } from "../src/database";
// // instaciar router - ruteador
// const router = Router();
// // crear rutas de cargos
// router.route("/")
//     .get(getDepartamentos)
//     .post(createDepartamento);

// router.route("/:departamentoId")
//     .get(getDepartamento)
//     .delete(deleteDepartamento)
//     .put(updateDepartamento)

// export default router