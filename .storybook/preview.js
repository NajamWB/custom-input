import Vue from "vue";
import Vuex from "vuex";
import store from "../src/store";

Vue.use(Vuex);
Vue.prototype.$store = store;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
