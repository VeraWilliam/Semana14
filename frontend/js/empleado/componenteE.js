export class Empleado {
    constructor() {
        this.id = "";
        this.grabar = true;
        this.url = "http://localhost:3000/empleados";
    }
    obtenerEmpleados() {
        // console.log(this.empleados);
        fetch(this.url)
            .then((res) => res.json())
            .then((empleados) => {
                console.log(empleados)
                let filas = ""
                empleados.forEach((empleado) => {
                    let {
                        id,
                        nombre,
                        cargoID,
                        departamentoID,
                        sueldo,
                        estado
                    } = empleado
                    // console.log(empleado.nombre);
                    filas += `
                    <tr>
                        <td>${id}</td>
                        <td>${nombre}</td>
                        <td>${cargoID}</td>
                        <td>${departamentoID}</td>
                        <td>${sueldo}</td>
                        <td>${estado? "Activo" : "Inactivo"}</td>
                        <td>
                          <button type="button" class="btn btn-edit" id="btn-edit" data-id="${id}">✎</button>
                          <button type="button" class="btn btn-delete" id="btn-delete" data-id="${id}">❌</button>
                        </td>
                      </tr>`;
                })
                // console.log(filas);
                document.getElementById("detalle-empleados").innerHTML = filas;
                // eliminar
                const btnsDelete = document.querySelectorAll(".btn-delete");
                btnsDelete.forEach((btn) => {
                    btn.addEventListener("click", async (e) => {
                        console.log(btn.dataset.id, e.target.dataset.id);
                        console.log("elimnando...");
                        await this.eliminarEmpleado(e.target.dataset.id);
                    });
                });
                // editar
                const $btnsEdit = document.querySelectorAll(".btn-edit");
                $btnsEdit.forEach((btn) => {
                    btn.addEventListener("click", async (e) => {
                        console.log(e.target.dataset.id);
                        this.id = e.target.dataset.id;
                        let {
                            nombre,
                            cargoID,
                            departamentoID,
                            sueldo,
                            estado
                        } = await this.obtenerCargo(this.id);
                        document.getElementById("nombre").value = nombre;
                        document.getElementById("cargoID").value = cargoID;
                        document.getElementById("departamentoID").value = departamentoID;
                        document.getElementById("sueldo").value = sueldo;
                        document.getElementById("activo").checked = estado;
                        document.getElementById("enviar").innerHTML = "Actualizar";
                        this.grabar = false;
                    });
                });
            })
            .catch((err) => console.log("error:=>", err))

    }

    async obtenerEmpleado(id) {
        const res = await fetch(`${this.url}/${id}`);
        const dato = await res.json()
        console.log(dato);
        return dato[0];
    }

    async eliminarEmpleados(id) {
        const res = await fetch(`${this.url}/${id}`, {
            method: "delete"
        });
        this.obtenerEmpleados();
    }

    async isertarDatos(empleado) {
        const res = await fetch(this.url, {
            method: "post",
            body: empleado
        });
        console.log(res);
        this.obtenerEmpleados()
        return true
    }

    async modificarDatos(empleadoMod, id) {
        try {
            const res = await fetch(`${this.url}/${id}`, {
                method: "put",
                body: empleadoMod
            });
            this.obtenerEmpleados();
            document.getElementById("enviar").innerHTML = "Insertar";
            this.grabar = true;
        } catch (error) {
            console.log("error: ", error);
        }
    }
}