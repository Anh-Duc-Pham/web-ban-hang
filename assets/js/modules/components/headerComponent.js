class headerComponent {
  constructor(component, wrapElement) {
    this.component = component;
    if (wrapElement == "" || wrapElement == null) {
      this.wrapElement = document.body;
    } else {
      this.wrapElement = wrapElement;
    }
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
    let spanElement = this.#tag("span");
    return {
      headerElement,
      imgElement,
      formElement,
      inputElement,
      buttonElement,
      linkElement,
      divElement,
      spanElement,
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
    container.className = "user-login";
    container.append(userLink);
    return container;
  }
  #notification() {
    let { notificationIcon } = this.#getAttribute();
    let eles = this.#createElements();
    let notiLink = eles.linkElement;
    let notiImg = eles.imgElement;
    let notiDisplay = eles.divElement;
    notiImg.src = notificationIcon;
    notiLink.className = "noti-link";
    notiLink.href = "#";
    notiLink.append(notiImg);
    notiDisplay.className = "noti-display";
    return { notiLink, notiDisplay };
  }
  #cart() {
    let { cartIcon } = this.#getAttribute();
    let eles = this.#createElements();
    let cartLink = eles.linkElement;
    let cartImg = eles.imgElement;
    let cartDisplay = eles.divElement;
    cartImg.src = cartIcon;
    cartLink.href = "#";
    cartLink.className = "cart-link";
    cartLink.innerHTML = `Giỏ hàng của bạn có (<span id="cartCounter">0</span>) sản phẩm`;
    cartLink.append(cartImg);
    cartDisplay.className = "cart-display";
    return { cartLink, cartDisplay };
  }

  #createHeaderElement() {
    let { headerElement } = this.#createElements();
    let brand = this.#brand();
    let searchBar = this.#searchBar();
    let user = this.#user();
    let { notiLink, notiDisplay } = this.#notification();
    let { divElement: notifications } = this.#createElements();
    notifications.className = "notifications";
    notifications.append(notiLink, notiDisplay);
    let { cartLink, cartDisplay } = this.#cart();
    let { divElement: cart } = this.#createElements();
    cart.className = "cart";
    cart.append(cartLink, cartDisplay);
    headerElement.append(brand, searchBar, user, notifications, cart);
    this.component.remove();
    return this.wrapElement.append(headerElement);
  }
  get create() {
    return this.#createHeaderElement();
  }
}
export default headerComponent;
