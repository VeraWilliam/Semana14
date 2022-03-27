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
exports.Coneccion = void 0;
// importar el conector
const promise_1 = require("mysql2/promise");
// // creamos la funcion asincrona para conectarnos a la base de datos
// export async function connect() {
//     // definimos un objeto de tipo conexion
//     const connection = await createPool({
//         // enviamos los parametros de conexon hacia la base de datos
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "nomina",
//         connectionLimit: 10,
//     });
//     // retorno la conexion
//     return connection;
// }
// clase abstracta (clase base que se hereda pero no se puede instanciar)
class Conexion {
    constructor() {
        this.conn = null;
    }
    get _conn() {
        return this.conn;
    }
    set _conn(value) {
        this.conn = value;
    }
}
class Coneccion extends Conexion {
    constructor() {
        super(); // ejecuta el constructor de la clase heredada
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, promise_1.createPool)({
                host: "localhost",
                user: "root",
                password: "root",
                database: "nomina",
                connectionLimit: 10,
            });
            return connection;
        });
    }
    getConneccion() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.connect();
        });
    }
}
exports.Coneccion = Coneccion;
