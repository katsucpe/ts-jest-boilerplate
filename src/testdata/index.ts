import config from "@@/config";
import * as path from "path";
import * as fs from "fs";
import { User, Role } from "@@/services/user-service";

export interface UserTestData {
  existingUser: User.Info;
}

export interface RoleTestData {
  existingRole: Role.Info;
}

function readTestData(fileName: string): any {
  let dataPath = `${path.resolve(__dirname)}/${config.env}/${fileName}`;
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
}

export class TestData {
  [k: string]: any;
  roleTestData!: RoleTestData;
  userTestData!: UserTestData;

  public static getGetters(): string[] {
    return Reflect.ownKeys(this.prototype) as string[];
  }

  constructor() {
    let files = fs.readdirSync(`${path.resolve(__dirname)}/${config.env}`);

    for (const filename of files) {
      console.debug("LOAD TEST DATA ===> ", filename);
      let filenameNoExt = filename.split(".").slice(0, -1).join(".");
      this[filenameNoExt] = readTestData(filename);
    }
  }
}
