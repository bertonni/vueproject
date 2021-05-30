import { createStore } from 'vuex';

export default createStore({
  state: {
    addTask: false,
    closeMod: false,
    finishedTasks: localStorage['finishedTasks'] ?? 0,
    colors: ['rgba(161, 106, 232, 0.7)', 'rgba(156, 45, 65, 0.7)', 
    'rgba(5, 92, 157, 0.7)', 'rgba(0, 48, 96, 0.7)', 'rgba(24, 165, 88, 0.7)', 
    'rgba(116, 108, 112, 0.7)'],
    bgColor: JSON.parse(localStorage.getItem('bg-color')) ?? 'rgba(0,0,0,0,8)',
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
