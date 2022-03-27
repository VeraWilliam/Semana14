import express, { Application } from "express";
import { IApp } from "../interface/Iservidor";
import morgan from "morgan"
import routerCargo from "../routers/cargo.routes";
import routerDepartamento from "../routers/departamento.routes";
import routerEmpleado from "../routers/empleados.routes";
import routerPrincipal from "../routers/principal";


export class App implements IApp {
    public app: Application;
    private _portDefault: number;
    constructor(private port: number = 3000) {
        this.app = express();
        this._portDefault = port;
        this.settings()
        this.middlewares()
        this.routes()
    }

    settings() {
        this.app.set("port", this._portDefault || process.env.PORT);
    }

    middlewares() {
        this.app.use(morgan("dev")); // muestra x consola mensajes en desarrollo
        // recibir datos de formulario como json
        this.app.use(express.urlencoded({ extended: true }));
        // recibe datos como json(no de formularios)
        this.app.use(express.json({ type: "*/*" }));
        // this.app.use(cors());
    }

    routes() {
        this.app.use(routerPrincipal)
        this.app.use("/cargos", routerCargo);
        this.app.use("/departamentos", routerDepartamento);
        this.app.use("/empleados", routerEmpleado);
    }
    async listen(): Promise<void> {
        await this.app.listen(this.app.get("port"));
        console.log(`Server on port => ${this.app.get("port")}`);
    }
}