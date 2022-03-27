import { App } from "./componentes/servidor"

const main = async () => {
    const app = new App();
    await app.listen()
}
main()
