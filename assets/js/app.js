import headerComponent from "./modules/components/headerComponent.js";
import RESTfulAPI from "./modules/client/RESTfulAPI.js";
const app = {
  $: document.querySelector.bind(document),
  $$: document.querySelectorAll.bind(document),
  header: function () {
    const getComponent = this.$("headerComponent");
    let wrapElement = this.$(".wrap");
    let header = new headerComponent(getComponent, wrapElement);
    header.create;
    return header;
  },
  start: function () {
    this.header();
  },
};
app.start();
