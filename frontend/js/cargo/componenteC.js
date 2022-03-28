// export class Cargo {
//   // se ejecuta al instanciar la clea y crea los atributos con this
//   constructor() {
//     this.cargos = [{
//         id: 1,
//         descripcion: "Analista",
//         estado: 1
//       },
//       {
//         id: 2,
//         descripcion: "Ingeniero",
//         estado: 0
//       },
//       {
//         id: 3,
//         descripcion: "Consultor",
//         estado: 1
//       },
//     ];

//     this.id = "";
//     this.grabar = true;
//     this.url = "http://localhost:3000/cargos";
//   }

//   obtenerCargos() {
//     // console.log(this.cargos);
//     fetch(this.url)
//       .then((res) => res.json())
//       .then((cargos) => {
//         // console.log(cargos);
//         let filas = ""
//         cargos.forEach((cargo) => {
//           let {
//             id,
//             descripcion,
//             estado
//           } = cargo;
//           // console.log(cargo.descripcion);
//           filas += `
//       <tr>
//         <td>${id}</td>
//         <td>${descripcion}</td>
//         <td>${estado ? "Activo" : "Inactivo"}</td>
//         <td>
//           <button type="button" class="btn btn-edit" id="btn-edit" data-id="${id}">✎</button>
//           <button type="button" class="btn btn-delete" id="btn-delete" data-id="${id}">❌</button>
//         </td>
//       </tr>`;
//         })
//         //console.log(filas);
//         document.getElementById("detalle-cargos").innerHTML = filas;
//         // eliminar
//         const btnsDelete = document.querySelectorAll(".btn-delete");
//         btnsDelete.forEach((btn) => {
//           btn.addEventListener("click", async (e) => {
//             console.log(btn.dataset.id, e.target.dataset.id);
//             console.log("elimnando...");
//             await this.eliminarCargo(e.target.dataset.id);
//           });
//         });
//         // editar
//         const $btnsEdit = document.querySelectorAll(".btn-edit");
//         $btnsEdit.forEach((btn) => {
//           btn.addEventListener("click", async (e) => {
//             console.log(e.target.dataset.id);
//             this.id = e.target.dataset.id;
//             let {
//               descripcion,
//               estado
//             } = await this.obtenerCargo(this.id);
//             document.getElementById("descripcion").value = descripcion;
//             document.getElementById("activo").checked = estado;
//             document.getElementById("enviar").innerHTML = "Actualizar";
//             this.grabar = false;
//           });
//         });
//       })
//       .catch((err) => console.log("error:=>", err))


//   }

//   async obtenerCargo(id) {
//     const res = await fetch(`${this.url}/${id}`);
//     const dato = await res.json()
//     console.log(dato);
//     return dato;
//   }

//   async eliminarCargo(id) {
//     const res = await fetch(`${this.url}/${id}`, {
//       method: "delete"
//     });
//     this.obtenerCargos();
//   }

//   async insertarDatos(cargo) {
//     const res = await fetch(this.url, {
//       method: "post",
//       body: cargo
//     });
//     console.log(res);
//     this.obtenerCargos()
//     return true
//   }

//   async modificarDatos(cargoMod, id) {
//     try {
//       const res = await fetch(`${this.url}/${id}`, {
//         method: "put",
//         body: cargoMod
//       });
//       this.obtenerCargos();
//       document.getElementById("enviar").innerHTML = "Insertar";
//       this.grabar = true;
//     } catch (error) {
//       console.log("error: ", error);
//     }
//   }
// }