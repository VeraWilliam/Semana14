import { App } from "../src/servidor"

const main = async () => {
    const app = new App();
    await app.listen()
}
main()
