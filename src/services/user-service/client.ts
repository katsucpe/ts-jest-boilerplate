import { AxiosInstance, AxiosResponse } from "axios";
import { User, Role } from "@@/services/user-service";
import axiosLoggerConfig from "@@/axios-logger-config";
import { CommonResponse, ApiClient } from "@@/services/common";

require("axios-debug-log")(axiosLoggerConfig);

export class UserApi {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getUser(id: string): Promise<CommonResponse<User.Info>> {
    let url: string = `/users/${id}`;
    let resp: AxiosResponse<CommonResponse<User.Info>> = await this.client.get(
      url
    );
    return resp.data;
  }
}

export class RoleApi {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getUser(id: string): Promise<CommonResponse<Role.Info>> {
    let url: string = `/roles/${id}`;
    let resp: AxiosResponse<CommonResponse<Role.Info>> = await this.client.get(
      url
    );
    return resp.data;
  }
}
