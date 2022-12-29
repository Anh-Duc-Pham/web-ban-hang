import headerComponent from "./modules/components/headerComponent.js";
import asyncComponents from "./modules/components/asyncComponents.js";
import RESTfulAPI from "./modules/client/RESTfulAPI.js";
import abc from "./modules/components/comp.js";
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
