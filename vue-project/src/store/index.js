import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
    username: '<Your Name>',
  },
  mutations: {
    setCounter(state, value) {
      state.counter += (value ?? 1);
    },
    setUsername(state, newName) {
      state.username = newName;
    }
  },
  actions: {
  },
  modules: {
  }
})
