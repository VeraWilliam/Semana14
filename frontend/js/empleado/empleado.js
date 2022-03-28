import {
    Empleado
} from "./componenteE.js";
const serEmpleado = new Empleado();
const d = document;
const $formEmpleado = d.getElementById("form-empleado");

d, addEventListener("DOMContentLoaded", serEmpleado.obtenerEmpleados())

// delegacion de eventos
d.addEventListener("click", async (e) => {
    // alert("haz hecho click")
    console.log(e.target)
    if (e.target.matches("#enviar")) {
        e.preventDefault();
        let $descrip = d.getElementById("nombre").value;
        let $carg = d.getElementById("cargoID").value;
        let $dep = d.getElementById("departamentoID").value;
        let $suel = d.getElementById("sueldo").value;
        let $estado = d.getElementById("activo").checked;
        if ($descrip.trim().length < 3, $carg.trim().length < 1, $dep.trim().length < 1, $suel.trim().length < 2) {
            alert("Datos vacios o incompletos");
        } else {
            if (serEmpleado.grabar) {
                // let id = Date.now();
                const empleado = {
                    nombre: $descrip,
                    cargoID: $carg,
                    departamentoID: $dep,
                    sueldo: $suel,
                    estado: $estado
                };
                const empleadoJson = JSON.stringify(empleado);
                const res = await serEmpleado.insertarDatos(empleadoJson);
            } else {
                let id = serEmpleado.id;
                const empleado = {
                    nombre: $descrip,
                    cargoID: $carg,
                    departamentoID: $dep,
                    sueldo: $suel,
                    estado: $estado
                };
                const empleadoModJson = JSON.stringify(empleado);
                const res = await serEmpleado.modificarDatos(empleadoModJson, id);
            }
            $formEmpleado.reset();
        }
    }
});