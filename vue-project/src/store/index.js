import { createStore } from 'vuex';

export default createStore({
  state: {
    addTask: false,
    closeMod: false,
    finishedTasks: localStorage['finishedTasks'] ?? 0,
    colors: ['#A16AE8', '#9C2D41', '#055C9D', '#003060', '#18A558', '#746C70'],
    todoList: JSON.parse(localStorage.getItem('todoList')) ?? [],
  },
  mutations: {
    setAddTask(state) {
      state.addTask = !state.addTask;
      state.closeMod = !state.addTask;
    },
    setClearStorage(state) {
      state.todoList = [];
      localStorage.clear();
    },
    setRemoveTask(state, index) {
      if (state.todoList[index].isFinished) state.finishedTasks--;
      state.todoList.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
      localStorage['finishedTasks'] = state.finishedTasks;
    },
    setFinishTask(state, index) {
      state.todoList[index].isFinished = !state.todoList[index].isFinished;
      if (state.todoList[index].isFinished) state.finishedTasks++;
      else state.finishedTasks--;
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
      localStorage['finishedTasks'] = state.finishedTasks;
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
