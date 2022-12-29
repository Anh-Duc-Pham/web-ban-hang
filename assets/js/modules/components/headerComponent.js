class headerComponent {
  constructor(component, wrapElement) {
    this.component = component;
    this.wrapElement = wrapElement;
  }
  #tag(htmlTag) {
    return document.createElement(htmlTag);
  }
  #getAttribute() {
    let logoImg = this.component.getAttribute("logo-img");
    let userIcon = this.component.getAttribute("user-icon");
    let notificationIcon = this.component.getAttribute("notification-icon");
    let cartIcon = this.component.getAttribute("cart-icon");
    return {
      logoImg: `./assets/imgs/${logoImg}`,
      userIcon: `./assets/imgs/utility-icon/${userIcon}`,
      notificationIcon: `./assets/imgs/utility-icon/${notificationIcon}`,
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
    let pElement = this.#tag("p");
    return {
      headerElement,
      imgElement,
      formElement,
      inputElement,
      buttonElement,
      linkElement,
      divElement,
      pElement,
    };
  }
  #brand() {
    let { logoImg } = this.#getAttribute();
    let { imgElement, linkElement: brand } = this.#createElements();
    brand.href = "#";
    let logo = imgElement;
    logo.src = logoImg;
    brand.append(logo);
    return brand;
  }
  #searchBar() {
    let { formElement, inputElement, buttonElement, divElement } = this.#createElements();
    divElement.className = "search-bar";
    inputElement.type = "text";
    inputElement.id = "searchInput";
    inputElement.className = "search-input";
    inputElement.placeholder = "Nhập tên sản phẩm, từ khóa cần tìm";
    buttonElement.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    formElement.append(inputElement, buttonElement);
    divElement.append(formElement);
    return divElement;
  }
  #user() {
    let {
      imgElement: userImg,
      linkElement: userLink,
      divElement: container,
    } = this.#createElements();
    let { userIcon } = this.#getAttribute();
    userImg.src = userIcon;
    userLink.href = "#";
    userLink.innerText = "đăng nhập";
    userLink.append(userImg);
    container.append(userLink);
    return container;
  }
  #notification() {}
  #cart() {}

  #createHeaderElement() {
    let { headerElement } = this.#createElements();
    let brand = this.#brand();
    let searchBar = this.#searchBar();
    let user = this.#user();
    let notification = this.#notification();
    let cart = this.#cart();
    headerElement.append(brand, searchBar, user, notification, cart);
    this.component.remove();
    return this.wrapElement.append(headerElement);
  }
  get create() {
    return this.#createHeaderElement();
  }
}
export default headerComponent;
