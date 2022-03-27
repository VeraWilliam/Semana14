import { App } from "./src/componentes/servidor"

const main = async () => {
    const app = new App();
    await app.listen()
}
main()
