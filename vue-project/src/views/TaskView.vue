<template>
<div ref="container" class="flex items-center justify-center h-screen">
  <div class="w-11/12 sm:w-9/12 max-w-2xl min-h-36 flex flex-col items-center 
      pt-4 mt-2 rounded text-white">
      <h1 class="text-2xl mb-1 sm:text-3xl md:text-4xl font-bold sm:mb-3">
        Task View
      </h1>
    <div class="flex flex-col items-center overflow-y-auto min-h-112 max-h-112 
      w-full bg-white bg-opacity-10 rounded py-3 backdrop-filter 
      backdrop-blur-sm">
      <h1 class="text-2xl">{{ this.currentTask.title }}</h1>
      <router-link to="/" class="text-lg">Voltar</router-link>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TaskView',
  data() {
    return {
      currentTask: ''
    }
  },
  mounted() {
    this.setCurrTask();
    const container = this.$refs.container;

    if (this.colors) {      
      const index = Math.floor(Math.random() * this.colors.length);
      container.style.backgroundColor = this.colors[index];
    }
  },
  unmounted() {
    clearInterval(this.interval);
  },
  props: {
    id: String
  },
  computed: {
    ...mapState(['todoList', 'colors'])
  },
  methods: {
    setCurrTask() {
      this.currentTask = this.todoList[this.id]
    }
  }
}
</script>