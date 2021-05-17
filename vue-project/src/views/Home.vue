<template>
  <div ref="container" class="main container">
    <div class="show-task-content" v-if="todoList.length === 0">
      <h1>Your Tasks</h1>
      <p>It seems you don't have any tasks</p>
    </div>
    <div class="show-task-content" v-else>
      <div class="task-header">
        <span>Total tasks: {{todoList.length}}</span>
        <h1>Your Tasks</h1>
        <span>Tasks completed: {{ finishedTasks }}</span>
      </div>
      <div class="tasks">
        <Task v-for="(task, index) in todoList" :key=index :id="index" :task="task" />
      </div>
    </div>
    <CreateTask v-if="addTask" />
    <button @click="toggleModal" class="add-button"><PlusIcon class="plus-icon" /> Add Task</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { PlusIcon } from "@heroicons/vue/solid";
import Task from "@/components/Task.vue";
import CreateTask from "../components/CreateTask.vue";
// @ is an alias to /src

export default {
  created() {

  },
  mounted() {
    let index = 0;
    let lastIndex = 0;
    let container = this.$refs.container;
    
    setInterval(() => {
      lastIndex = index;
      index = Math.floor(Math.random() * this.colors.length);
      
      if (index === lastIndex) {
        if (index !== this.colors.length - 1) index++;
        else if (index !== 0) index--;
      }

      container.style.background = this.colors[index];
    }, 15000);
  },
  name: "Home",
  components: {
    Task,
    PlusIcon,
    CreateTask,
  },
  computed: {
    ...mapState(["todoList", "addTask", "colors", "finishedTasks"]),
  },
  methods: {
    toggleModal() {
      this.$store.commit("setAddTask");
    },
  },
};
</script>
