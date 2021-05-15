<template>
  <div class="container">
    <CreateTask />
  </div>
</template>

<script>
// @ is an alias to /src
// import Task from '@/components/Task.vue';
import CreateTask from '@/components/CreateTask.vue';

export default {
  name: 'AddTask',
  components: {
    // Task,
    CreateTask,
  }
}
</script>