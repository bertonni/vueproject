<template>
  <div
    class="w-11/12 md:w-9/12 bg-white bg-opacity-30 rounded-tr rounded-br 
    pt-1 pb-1 pl-4cursor-default border-l-6 border-transparent my-3 min-w-36 
    hover:bg-opacity-40 hover:duration-300 hover:opacity-80 opacity-0 group"
    :class="[this.task.isFinished ? 'line-through' : '', this.id > 0 
    && this.id < 5 ? this.delays[this.id-1] : 'animate-fadein-right']"
    >
    <div class="flex justify-between">
      <h3 class="ml-2 font-medium text-lg"
        :class="task.isFinished ? 'line-through opacity-50' : ''">
        {{ task.title }}
      </h3>
      <EyeIcon
        class="h-6 w-6 mr-3 group-hover:block md:hidden cursor-pointer 
        hover:opacity-70 transition animate-fadein-left"
        @click="redirectToTaskView(this.id)"
      />
    </div>
    <div class="flex items-center pt-1 px-1 gap-2">
      <CheckCircleIcon class="h-8 w-8 cursor-pointer min-w-8 z-50 hover:opacity-70"
        :class="task.isFinished ? 'opacity-50' : ''"
        @click="finishTask(id)"
      />
      <p class="group-hover:whitespace-normal flex-grow-2 sm:truncate" 
        :title=task.description :class="task.isFinished ? 
        'line-through opacity-50' : ''">
        {{ task.description }}
      </p>
      <div class="text-white cursor-pointer hover:opacity-70 mr-2" 
      @click="removeTask(id)">
        <TrashIcon class="h-6 w-6" />
      </div>
    </div>
  </div>
</template>

<script>
import { TrashIcon, EyeIcon } from "@heroicons/vue/outline";
import { CheckCircleIcon } from "@heroicons/vue/solid";
export default {
  name: "Task",
  data() {
    return {
      delays: [
        'animate-fadein-right-2',
        'animate-fadein-right-3',
        'animate-fadein-right-4',
        'animate-fadein-right-5',
      ],
    }
  },
  props: {
    task: Object,
    id: Number,
  },
  computed: {
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
    redirectToTaskView(id) {
      this.$router.push('/task/' + id)
    }
  },
  components: {
    CheckCircleIcon,
    TrashIcon,
    EyeIcon,
  },
};
</script>