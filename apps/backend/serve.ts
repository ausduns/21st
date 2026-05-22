import { startServer } from "./src/server"

const port = Number(process.env.PORT) || 8787
startServer(port)
