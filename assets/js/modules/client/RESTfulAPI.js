import { host } from "./config.js";

class RESTfulAPI {
  constructor(resourcePath, data) {
    this.resourcePath = resourcePath;
    this.data = data;
  }
  async send(method, data) {
    let getData = await fetch(host + this.resourcePath, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data == "" || data == null ? null : JSON.stringify(data),
    });
    let res = await getData.json();
    return res;
  }
  /**
   * @returns <Promise> GET method
   */
  async #getData() {
    return await this.send("GET");
  }
  /**
   * @returns <Promise> POST method
   */
  async #postData() {
    return await this.send("POST", this.data);
  }
  get get() {
    return this.#getData();
  }
  get post() {
    return this.#postData();
  }
}
export default RESTfulAPI;
