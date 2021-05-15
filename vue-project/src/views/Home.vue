<template>
  <div class="home container">
    <a href="#/add" class="btn btn-warning">Create a Task</a><br><br>
    <h1>Todo List</h1><br>
    <div v-if="todoList.length === 0" class="flex items-center flex-col">
      <h1>You do not have any tasks</h1><br>
    </div>
    <div v-else>
      <h1>Your tasks</h1><br>
      <Table :data="todoList" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Table from '../components/Table.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Table
    
  },
  computed: {
    ...mapState(['todoList']),
  },
  methods: {

  }
}
</script>
