import { host } from "./config.js";

class RESTfulAPI {
  constructor(resourcePath) {
    this.resourcePath = resourcePath;
  }
  async send(method, data) {
    let getData = await fetch(host + this.resourcePath, {
      method,
      body: data == "" || data == null ? null : JSON.stringify(data),
    });
    let res = await getData.json();
    return res;
  }
  /**
   * @returns <Promise> GET method
   */
  async getData() {
    return await this.send("GET");
  }
  get get() {
    return this.getData();
  }
}
export default RESTfulAPI;
