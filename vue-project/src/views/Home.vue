<template>
  <div
    ref="container"
    class="flex flex-col items-center text-white relative overflow-hidden 
    bg-opacity-80 w-full h-screen transition duration-4500"
  >
    <Header />
    <div
      class="w-9/12 max-w-2xl min-h-36 flex flex-col items-center pt-4 mt-8 
      rounded"
      v-if="todoList.length === 0"
    >
      <h1 class="text-2xl mb-1 sm:text-3xl md:text-4xl font-bold sm:mb-3">
        Your Tasks
      </h1>
      <p>It seems you don't have any tasks</p>
    </div>
    <div
      class="w-11/12 sm:w-9/12 max-w-2xl min-h-36 flex flex-col items-center 
      pt-4 mt-2 rounded"
      v-else
    >
      <div class="flex items-center gap-5 sm:gap-12 md:gap-24">
        <span class="text-sm sm:text-base md:text-lg">
          Total: {{ todoList.length }}
        </span>
        <h1
          class="text-2xl flex-grow-2 mb-1 sm:text-3xl md:text-4xl font-bold 
          sm:mb-3"
        >
          Your Tasks
        </h1>
        <span class="text-sm sm:text-base md:text-lg">
          Completed: {{ finishedTasks }}
        </span>
      </div>
      <div
        class="flex flex-col items-center overflow-y-auto max-h-112 w-full 
        bg-white bg-opacity-10 rounded py-3 backdrop-filter backdrop-blur-sm"
      >
        <Task
          v-for="(task, index) in todoList"
          :key="index"
          :id="index"
          :task="task"
        />
      </div>
    </div>
    <CreateTask v-if="addTask" />
    <button
      @click="toggleModal"
      class="flex items-center justify-center w-11/12 sm:w-9/12 max-w-2xl 
      bg-white bg-opacity-10 border-2 border-dashed border-black 
      border-opacity-10 rounded cursor-pointer text-xl font-medium h-12 sm:h-14 
      mt-4 text-white hover:bg-opacity-20 mb-4 focus:outline-none 
      backdrop-filter backdrop-blur-sm"
    >
      <PlusIcon class="h-6 w-6" />
      Add Task
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { PlusIcon } from "@heroicons/vue/solid";
import Task from "@/components/Task.vue";
import Header from "@/components/Header.vue";
import CreateTask from "@/components/CreateTask.vue";
// @ is an alias to /src

export default {
  data() {
    return {
      interval: "",
    };
  },
  mounted() {
    let index = 0;
    let lastIndex = 0;
    let container = this.$refs.container;

    if (this.colors) {
      this.interval = setInterval(() => {
        lastIndex = index;
        index = Math.floor(Math.random() * this.colors.length);

        if (index === lastIndex) {
          if (index !== this.colors.length - 1) index++;
          else if (index !== 0) index--;
        }

        container.style.backgroundColor = this.colors[index];
      }, 15000);
    }
  },
  unmounted() {
    clearInterval(this.interval);
  },
  name: "Home",
  components: {
    Task,
    Header,
    PlusIcon,
    CreateTask,
  },
  computed: {
    ...mapState(["todoList", "addTask", "colors", "finishedTasks", "bgColor"]),
  },
  methods: {
    toggleModal() {
      this.$store.commit("setAddTask");
    },
  },
};
</script>
