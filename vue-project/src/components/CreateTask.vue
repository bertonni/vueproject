<template>
  <div class="flex flex-col items-center create-task-content">
    <h1>Create task</h1>
    <br />
    <form action="#" class="w-full">
      <div class="flex flex-col my-2 items-start mt-2">
        <label for="title">Title</label>
        <input
          type="text"
          class="w-full input mt-2"
          ref="title"
          id="title"
          placeholder="Type the title here"
        />
      </div>
      <div class="flex flex-col items-start mt-2">
        <label for="description">Description</label>
        <textarea
          class="w-full input mt-2"
          ref="description"
          placeholder="Type the description here"
          rows="4"
          id="description"
        />
      </div>
      <div class="flex flex-col my-2 items-start mt-2">
        <label for="deadline">Deadline</label>
        <input
          type="date"
          class="w-full input mt-2"
          ref="deadline"
          id="deadline"
        />
      </div>
      <div>
        <button
          type="submit"
          @click.prevent="handleSubmit"
          class="btn btn-success"
        >
          Add Task
        </button>
      </div>
    </form>
  </div>
  <button class="btn btn-primary" v-if="!showTask" @click="showAllTasks">Show Tasks</button>
  <button class="btn btn-warning" v-else @click="showAllTasks">Hide Tasks</button>
  <br>
  <div v-if="thereIsTask">
    <h1>Your tasks</h1>
    <br />
    <Table :data="todoList" />
    <br />
    <button type="submit" @click.prevent="clearTasks" class="btn btn-danger">
      Delete All Tasks
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Table from './Table.vue';

export default {
  data: function() {
    return {
      showTask: false,
    }
  },
  name: "CreateTask",
  computed: {
    ...mapState(["todoList"]),
    thereIsTask: function () {
      return this.showTask;
    },
  },
  methods: {
    showAllTasks() {
      this.showTask = !this.showTask;
    },
    clearForm() {
      this.$refs.title.value = "";
      this.$refs.description.value = "";
      this.$refs.deadline.value = "";
    },
    clearTasks() {
      this.$store.commit('setClearStorage');
    },
    handleSubmit() {
      let title = this.$refs.title.value.trim();
      let description = this.$refs.description.value.trim();
      let deadline = this.$refs.deadline.value.trim();

      if (
        title.length === 0 ||
        description.length === 0 ||
        deadline.length === 0
      ) {
        return;
      }
      const task = {
        title: title,
        description: description,
        deadline: deadline,
      };
      this.$store.commit("setNewTask", task);
      this.clearForm();
    },
  },
  components: {
    Table,
  },
};
</script>

<style scoped>
.create-task-content {
  width: 400px;
  margin: 20px auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 1.5rem 3rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
textarea {
  resize: none;
}
label {
  font-weight: bold;
}
</style>