class headerComponent {
  constructor(component) {
    this.component = component;
  }
  #tag(htmlTag) {
    return document.createElement(htmlTag);
  }
  #getAttribute() {
    let logoImg = this.component.getAttribute("logo-img");
    let orderIcon = this.component.getAttribute("order-icon");
    let cartIcon = this.component.getAttribute("cart-icon");
    return {
      logoImg: `./assets/imgs/${logoImg}`,
      orderIcon: `./assets/imgs/utility-icon/${orderIcon}`,
      cartIcon: `./assets/imgs/utility-icon/${cartIcon}`,
    };
  }
  #createElements() {
    let headerElement = this.#tag("header");
    let imgElement = this.#tag("img");
    let formElement = this.#tag("form");
    let inputElement = this.#tag("input");
    let buttonElement = this.#tag("button");
    let linkElement = this.#tag("a");
    let divElement = this.#tag("div");
    return {
      headerElement,
      imgElement,
      formElement,
      inputElement,
      buttonElement,
      linkElement,
      divElement,
    };
  }
  #brand() {
    let { logoImg } = this.#getAttribute();
    let { imgElement, linkElement } = this.#createElements();
    let brand = linkElement;
    let logo = imgElement;
    logo.src = logoImg;
    brand.append(logo);
    return brand;
  }
  #searchBar() {
    let { formElement, inputElement, buttonElement, divElement } = this.#createElements();
    divElement.className = "search-bar";
    inputElement.type = "text";
    inputElement.className = "search-input";
    buttonElement.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    formElement.append(inputElement, buttonElement);
    divElement.append(formElement);
    return divElement;
  }
  #userOrder() {
    let { divElement } = this.#createElements();
    divElement.className = "user-order";
    return divElement;
  }
  #createHeaderElement() {
    let { headerElement } = this.#createElements();
    let brand = this.#brand();
    let searchBar = this.#searchBar();
    let userOrder = this.#userOrder();
    headerElement.append(brand, searchBar, userOrder);
    return document.body.append(headerElement);
  }
  get create() {
    return this.#createHeaderElement();
  }
}
export default headerComponent;
