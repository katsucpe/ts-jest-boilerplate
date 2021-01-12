import { AxiosResponse } from "axios"
import { User, Role } from "@@/services/user-service"
import axiosLoggerConfig from "@@/axios-logger-config"
import { CommonResponse, ApiClient } from "@@/services/common"

require("axios-debug-log")(axiosLoggerConfig)

class UserApiClient extends ApiClient {
  async getUser(id: string): Promise<CommonResponse<User.Info>> {
    let url: string = `/users/${id}`
    let resp: AxiosResponse<CommonResponse<User.Info>> = await this.client.get(url)
    return resp.data
  }
}

class RoleApiClient extends ApiClient {
  async getUser(id: string): Promise<CommonResponse<Role.Info>> {
    let url: string = `/roles/${id}`
    let resp: AxiosResponse<CommonResponse<Role.Info>> = await this.client.get(url)
    return resp.data
  }
}

export { UserApiClient, RoleApiClient }
