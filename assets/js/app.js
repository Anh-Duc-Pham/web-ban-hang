import headerComponent from "./modules/components/headerComponent.js";
import asyncComponents from "./modules/components/asyncComponents.js";
const app = {
  $: document.querySelector.bind(document),
  $$: document.querySelectorAll.bind(document),
  header: function () {
    const getComponent = this.$("headerComponent");
    let header = new headerComponent(getComponent);
    header.create;
    return header;
  },
  start: function () {
    this.header();
  },
};
app.start();
