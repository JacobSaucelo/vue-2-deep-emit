import Vue from "vue";
// import { createStore } from "vuex";

import App from "./App.vue";
import store from "./store.js";

Vue.config.productionTip = false;

// const store = createStore({
//   state() {
//     return {
//       count: 0,
//     };
//   },

//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//   },
// });

// Vue.use(store);
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
