class components {
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
  #creatParentElement(element) {
    let parentElement = null;
    let parentElementAttr = element.getAttribute("parentElement");
    let parentElementClass = element.getAttribute("class");
    parentElementAttr == null
      ? (parentElement = document.createElement("div"))
      : (parentElement = document.createElement(parentElementAttr));
    parentElementClass == null ? null : (parentElement.className = parentElementClass);
    return parentElement;
  }
  #createElement() {
    this.components.forEach((element) => {
      let parentElement = this.#creatParentElement(element);
      let template = element.innerHTML;
      html += template;
      parentElement.innerHTML = html;
      this.#wrapElement().append(parentElement);
      element.remove();
    });
  }
  get create() {
    return this.#createElement();
  }
}
export default components;
