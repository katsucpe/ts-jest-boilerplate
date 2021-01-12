import * as dotenv from "dotenv"
import * as path from "path"

if (process.env.ENV != undefined) {
  dotenv.config({ path: path.resolve(process.cwd(), `.env.${process.env.ENV}`) })
} else {
  dotenv.config()
}

let config = {
  env: process.env.ENV || "dev",
  apiHost: process.env.API_HOST || "http://localhost:8080",
}

export default config
