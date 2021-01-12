import config from "@@/config"
import * as path from "path"
import * as fs from "fs"
import { User, Role } from "@@/services/user-service"

export interface UserTestData {
  existingUser: User.Info
}

export interface RoleTestData {
  existingRole: Role.Info
}

function readTestData(fileName: string): any {
  let companyApiDataPath = `${path.resolve(__dirname)}/${config.env}/${fileName}.json`
  return JSON.parse(fs.readFileSync(companyApiDataPath, "utf8"))
}

export class TestData {
  [k: string]: any
  roleTestData!: RoleTestData
  userTestData!: UserTestData

  public static getGetters(): string[] {
    return Reflect.ownKeys(this.prototype) as string[]
  }

  constructor() {
    const keys = ["roleTestData", "userTestData"]

    for (const key of keys) {
      console.debug("LOAD TEST DATA ===> ", key)
      this[key] = readTestData(key)
    }
  }
}
