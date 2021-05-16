<template>
  <div class="add-task-content">
    <h1>Add Task</h1>
    <br />
    <form action="#">
      <div class="form-group">
        <label for="title" :class="moveTitle ? 'toUp' : 'toInitial'"
          >Title</label
        >
        <input
          type="text"
          id="title"
          ref="title"
          autocomplete="off"
          class="input"
          v-on="{ focus: addTitleClass, blur: removeTitleClass }"
        />
      </div>
      <div class="form-group">
        <label for="description" :class="moveDescription ? 'toUp' : 'toInitial'"
          >Description</label
        >
        <input
          type="text"
          id="description"
          ref="description"
          autocomplete="off"
          class="input"
          v-on="{ focus: addDescriptionClass, blur: removeDescriptionClass }"
        />
      </div>
      <div class="form-group options">
        <a href="#" @click.prevent="handleSubmit">Save</a>
        <a href="#" @click.prevent="closeModal">Close</a>
      </div>
    </form>
    <div class="error" v-if="errors.length > 0">
      <ul>
        <li v-for="error of errors" :key="error">{{ error }}</li>
      </ul>
      <span class="close" @click="errors = []">
        x
      </span>
    </div>
    <div class="success" v-if="success">
      <ul>
        <li>Task added successfully</li>
      </ul>
      <span class="close-success" @click="success = false">
        x
      </span>
    </div>
  </div>
  <div class="overlay-home" @click="closeModal" />
</template>

<script>
import { mapState } from "vuex";

export default {
  data: function () {
    return {
      showTask: false,
      moveTitle: false,
      moveDescription: false,
      success: false,
      errors: [],
    };
  },
  name: "CreateTask",
  computed: {
    ...mapState(["todoList", "addTask"]),
    thereIsTask: function () {
      return this.showTask && this.todoList.length > 0;
    },
  },
  methods: {
    showAllTasks() {
      this.showTask = !this.showTask;
    },
    clearForm() {
      this.$refs.title.value = "";
      this.$refs.description.value = "";
    },
    clearTasks() {
      this.$store.commit("setClearStorage");
    },
    handleSubmit() {
      let title = this.$refs.title.value.trim();
      let description = this.$refs.description.value.trim();

      if (title.length === 0 || description.length === 0) {
        this.success = false;
        if (title.length === 0) this.errors[0] = 'Title must be filled';
        else this.errors[0] = '';
        if (description.length === 0) this.errors[1] = ('Description must be filled');
        else this.errors[1] = '';
        return;
      }
      this.errors = [];
      this.success = true;
      const task = {
        title: title,
        description: description,
        isFinished: false,
      };
      this.$store.commit("setNewTask", task);
      this.clearForm();
    },
    addTitleClass() {
      if (this.$refs.title.value.trim() !== "") return;
      this.moveTitle = true;
    },
    removeTitleClass() {
      if (this.$refs.title.value.trim() !== "") return;
      this.moveTitle = false;
    },
    addDescriptionClass() {
      if (this.$refs.description.value.trim() !== "") return;
      this.moveDescription = true;
    },
    removeDescriptionClass() {
      if (this.$refs.description.value.trim() !== "") return;
      this.moveDescription = false;
    },
    closeModal() {
      this.$store.commit("setAddTask");
    },
  },
  components: {
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 1.5rem;
}

.form-group:nth-child(2) {
  margin-top: 2rem;
}

label {
  position: absolute;
  font-weight: 400;
  margin-right: 1.6rem;
  cursor: text;
}

.options {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.options > a {
  padding: 0.2rem 0.6rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--gray-text);
}

.options > a:hover {
  opacity: 0.5;
}

.error, .success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 60%;
  border-radius: 4px;
  margin-bottom: 1rem;
  position: relative;
  animation: fadeInUp var(--animation-time) forwards;
}

.error {
  background: #F88379;
}

.success {
  background: #67bf7b;
}

.close, .close-success {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  cursor: pointer;
}

.close {
  color: #D2042D;
}

.close-success {
  color: #125926;
}

.error ul, .success ul {
  list-style: none;
}

.error ul li {
  color: #D2042D;
  font-weight: 500;
}

.success ul li {
  color: #125926;
  font-weight: 500;
}
</style>