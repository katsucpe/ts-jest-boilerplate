import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Debugger } from "debug";

let axiosLoggerConfig = {
  request: function (debug: Debugger, config: AxiosRequestConfig) {
    debug(
      "REQUEST",
      `${config.method!!.toUpperCase()} ${config.url}`,
      `header: ${JSON.stringify(config.headers!)}`,
      `data: ${JSON.stringify(config.data)}`
    );
  },
  response: function (debug: Debugger, response: AxiosResponse) {
    debug(
      "RESPONSE",
      `${response.status} ${response.statusText}`,
      `'(${response.config.method!!.toUpperCase()} ${response.config.url})`,
      `data: ${JSON.stringify(response.data)}`
    );
  },
  error: function (debug: Debugger, error: AxiosError) {
    // Read https://www.npmjs.com/package/axios#handling-errors for more info
    debug("ERROR", error.message, error.stack);
  },
};

export default axiosLoggerConfig;
