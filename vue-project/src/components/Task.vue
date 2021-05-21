<template>
  <div class="w-11/12 md:w-9/12 bg-white bg-opacity-30 rounded-tr rounded-br pt-1 pb-1 transition pl-4 cursor-default border-l-6 border-transparent my-3 min-w-36 hover:bg-opacity-40 hover:duration-300 hover:opacity-80" :class="task.isFinished ? 'line-through opacity-50' : ''">
    <h3 :class="task.isFinished ? 'line-through opacity-50 font-medium text-lg' : 'font-medium text-lg'">{{ task.title }}</h3>
    <div class="flex items-center pt-1 px-1 gap-2 group">
      <CheckCircleIcon class="h-8 w-8 cursor-pointer min-w-8"
        :class="task.isFinished ? 'opacity-50' : ''"
        @click="finishTask(id)"
      />
      <p class="hover:whitespace-normal flex-grow-2 sm:truncate" :title=task.description :class="task.isFinished ? 'line-through opacity-50' : ''">
        {{ task.description }}
      </p>
      <span></span>
      <div class="text-white cursor-pointer hover:opacity-80 mr-4" @click="removeTask(id)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5
             7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/solid";
export default {
  name: "Task",
  props: {
    task: Object,
    id: Number,
  },
  methods: {
    getFormattedDate(date) {
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    removeTask(taskIndex) {
      const confirmRemove = confirm(
        "Are you sure you want to delete this task? This action can't be undone"
      );
      if (confirmRemove) this.$store.commit("setRemoveTask", taskIndex);
      return;
    },
    finishTask(taskIndex) {
      this.$store.commit('setFinishTask', taskIndex);
    },
  },
  components: {
    CheckCircleIcon,
  },
};
</script>