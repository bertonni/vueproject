import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
    username: '<Your Name>',
    todoList: JSON.parse(localStorage.getItem('todoList')) ?? [],
  },
  mutations: {
    setCounter(state, value) {
      state.counter += (value ?? 1);
    },
    setUsername(state, newName) {
      state.username = newName;
    },
    setClearStorage(state) {
      state.todoList = [];
      localStorage.clear();
    },
    setRemoveTask(state, index) {
      state.todoList.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    setNewTask(state, task) {
      state.todoList.push(task);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    }
  },
  actions: {
  },
  modules: {
  }
})
