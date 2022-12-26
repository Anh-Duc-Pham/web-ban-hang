import RESTfulAPI from "../client/RESTfulAPI.js";
class asyncComponents {
  /**
   *
   * @param {selector} components Get components
   * @param {selector} wrapElement Set wrap element
   * @returns Elements rendered
   */
  constructor(components, wrapElement) {
    this.components = components;
    this.wrapElement = wrapElement;
  }
  #wrapElement() {
    if (this.wrapElement == null || this.wrapElement == "") {
      return document.body;
    } else {
      return document.querySelector(this.wrapElement);
    }
  }
  #db(element) {
    let dbAPI = new RESTfulAPI();
    let dbName = element.getAttribute("dbName");
    dbName == null
      ? console.log("Chưa có dbName attribute!", "color: red, font-size: 16px")
      : (dbAPI.resourcePath = dbName);
    let data = dbAPI.get;
    return data;
  }
  #createParentElement(element) {
    let parentElement = null;
    let parentElementAttr = element.getAttribute("parentElement");
    let parentElementClass = element.getAttribute("class");
    parentElementAttr == null || parentElementAttr == ""
      ? (parentElement = document.createElement("div"))
      : (parentElement = document.createElement(parentElementAttr));
    parentElementClass == null ? null : (parentElement.className = parentElementClass);
    return parentElement;
  }
  #createElement() {
    this.components.forEach((element) => {
      let data = this.#db(element);
      let parentElement = this.#createParentElement(element);
      let html = "";
      let template = element.innerHTML;
      data.then((items) => {
        items.forEach((item) => {
          let htmlContent = eval(`\`${template}\``);
          html += htmlContent;
          parentElement.innerHTML = html;
        });
        this.#wrapElement().append(parentElement);
        element.remove();
      });
    });
  }
  get create() {
    return this.#createElement();
  }
}
export default asyncComponents;
