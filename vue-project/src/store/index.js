import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
    username: '<Your Name>',
    addTask: false,
    colors: ['#A16AE8', '#9C2D41', '#055C9D', '#003060', '#18A558', '#746C70'],
    todoList: JSON.parse(localStorage.getItem('todoList')) ?? [],
  },
  mutations: {
    setCounter(state, value) {
      state.counter += (value ?? 1);
    },
    setUsername(state, newName) {
      state.username = newName;
    },
    setAddTask(state) {
      state.addTask = !state.addTask;
    },
    setClearStorage(state) {
      state.todoList = [];
      localStorage.clear();
    },
    setRemoveTask(state, index) {
      state.todoList.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    setFinishTask(state, index) {
      state.todoList[index].isFinished = !state.todoList[index].isFinished;
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
