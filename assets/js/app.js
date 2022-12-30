import RESTfulAPI from "./modules/client/RESTfulAPI.js";

// Hiển thị các showroom của hacom

var showroom = [];

const displayShowroom = (showrooms) => {
  let renderDiv = document.querySelector(".showroom-body");
  renderDiv.innerHTML = "";
  showrooms.forEach((showroom) => {
    let Div = document.createElement("div");
    Div.classList.add("showroom-wrapper");

    let SRHeader = document.createElement("div");
    SRHeader.classList.add("showroom-title");

    let idShowroom = document.createElement("p");

    idShowroom.innerText = showroom.id;
    idShowroom.style.backgroundColor = "#ed1b24";
    idShowroom.style.color = "#ffffff";

    let NameShowroom = document.createElement("p");
    NameShowroom.classList.add("NameSR");
    NameShowroom.innerText = showroom.name;

    NameShowroom.style.color = "#ffffff";
    NameShowroom.style.backgroundColor = "#243a76";

    let SRbody = document.createElement("div");
    SRbody.classList.add("showroom-content");

    let telShowroom = document.createElement("p");
    telShowroom.innerText = `tel: ${showroom.tel}`;

    let AddressShowroom = document.createElement("p");
    AddressShowroom.classList.add("addressSR");
    AddressShowroom.innerText = showroom.address;

    let EmailShowroom = document.createElement("p");
    EmailShowroom.innerHTML = `Email: ${showroom.email}`;

    SRHeader.append(idShowroom, NameShowroom);
    SRbody.append(AddressShowroom, EmailShowroom, telShowroom);

    Div.append(SRHeader, SRbody);
    renderDiv.appendChild(Div);
  });
};
