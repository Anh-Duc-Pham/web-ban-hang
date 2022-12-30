import headerComponent from "./modules/components/headerComponent.js";
import TopHeader from "./modules/components/topheaderComponent.js";
import RESTfulAPI from "./modules/client/RESTfulAPI.js";
const app = {
  $: document.querySelector.bind(document),
  $$: document.querySelectorAll.bind(document),
  header: function () {
    const getComponent = this.$("headerComponent");
    const topHeaders = this.$$('topHeader');
    topHeaders.forEach((topHeader, index) => {
      const topHeaderElm = new TopHeader(topHeader, index);
      topHeaderElm.create();
      topHeaderElm.action();
    });
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
