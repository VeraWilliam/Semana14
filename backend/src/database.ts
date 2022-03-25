// importar el conector
import { createPool, Pool } from "mysql2/promise"
// creamos la funcion asincrona para conectarnos a la base de datos
export async function connect() {
    // definimos un objeto de tipo conexion
    const connection = await createPool({
        // enviamos los parametros de conexon hacia la base de datos
        host: "localhost",
        user: "root",
        password: "root",
        database: "nomina",
        connectionLimit: 10,
    });
    // retorno la conexion
    return connection;
}