import axios, { AxiosInstance } from "axios"
import axiosLoggerConfig from "@@/axios-logger-config"
const { addMsg } = require("jest-html-reporters/helper")
require("axios-debug-log")(axiosLoggerConfig)

export interface CommonResponse<T = any> {
  returnCode: number
  returnMsg: string
  data: T
}

export class ApiClient {
  private host: string
  protected client: AxiosInstance

  constructor(host: string) {
    this.host = host
    this.client = axios.create({
      baseURL: `${this.host}`,
    })
    this.client.interceptors.request.use((request) => {
      let config: any = request
      config.metadata = { startTime: new Date() }
      let msg = `REQ [${request.method?.toUpperCase()}] ${request.baseURL}${request.url}\n`
      msg += JSON.stringify(request.data, null, 2)
      addMsg(msg)
      return config
    })
    this.client.interceptors.response.use((response) => {
      let res: any = response
      let endTime: any = new Date()
      let duration = endTime - res.config.metadata.startTime
      let msg = `RES (${response.status} ${response.statusText}) - [${response.config.method?.toUpperCase()}] ${
        response.config.baseURL
      }${response.config.url} - ${duration} ms\n`
      msg += JSON.stringify(response.data, null, 2)
      addMsg(msg)
      return response
    })
  }
}
