<template>
  <div class="w-11/12 sm:w-9/12 max-w-lg min-h-36 flex flex-col items-center pt-4 mt-32 transition duration-1500 rounded animate-fadein-up bg-white text-gray-500 z-50 absolute"
  >
    <h1 class="text-2xl sm:text-3xl font-bold sm:mb-3">Add Task</h1>
    <br />
    <form action="#" class="w-10/12">
      <div class="form-group">
        <label for="title" :class="moveTitle ? 'font-medium text-lg sm:text-xl transition duration-300 transform-gpu -translate-y-full cursor-default' : 'transition duration-300 transform-gpu translate-y-0 font-normal text-left'"
          >Title</label>
        <input
          type="text"
          id="title"
          ref="title"
          autocomplete="off"
          class="w-full xs:mx-auto xs:w-10/12 border-b-2 border-gray-400 min-h-8 text-base bg-transparent focus:outline-none focus:border-blue-500 transition duration-500 z-30"
          v-on="{ focus: addTitleClass, blur: removeTitleClass }"
        />
      </div>
      <div class="form-group">
        <label for="description" :class="moveDescription ? 'font-medium text-lg sm:text-xl transition duration-300 transform-gpu -translate-y-full cursor-default' : 'transition duration-300 transform-gpu translate-y-0 font-normal text-left'"
          >Description</label>
        <input
          type="text"
          id="description"
          ref="description"
          autocomplete="off"
          class="w-full xs:mx-auto xs:w-10/12 border-b-2 border-gray-400 min-h-8 text-base bg-transparent focus: outline-none focus:border-blue-500 transition duration-500 z-30"
          v-on="{ focus: addDescriptionClass, blur: removeDescriptionClass }"
        />
      </div>
      <div class="form-group flex items-center justify-center gap-4">
        <a href="#" @click.prevent="handleSubmit" class="py-1 px-2 text-lg font-medium text-gray-500 hover:opacity-60">Save</a>
        <a href="#" @click.prevent="closeModal" class="py-1 px-2 text-lg font-medium text-gray-500 hover:opacity-60">Close</a>
      </div>
    </form>
    <div class="message w-9/12 bg-red-300" v-if="errors.length > 0">
      <ul class="list-none">
        <li class="text-sm font-medium text-red-600" v-for="error of errors" :key="error">{{ error }}</li>
      </ul>
      <span class="text-red-600 absolute top-1 right-3 cursor-pointer" @click="errors = []"> x </span>
    </div>
    <div class="message w-9/12 bg-green-300" v-if="success">
      <ul class="list-none">
        <li class="text-sm font-medium text-green-600">Task added successfully</li>
      </ul>
      <span class="text-green-600 absolute top-1 right-3 cursor-pointer" @click="success=false"> x </span>
    </div>
  </div>
  <div class="bg-black bg-opacity-50 fixed h-screen w-full z-30 top-0 left-0" @click="closeModal" />
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
        if (title.length === 0) this.errors[0] = "Title must be filled in";
        else this.errors[0] = "";
        if (description.length === 0)
          this.errors[1] = "Description must be filled in";
        else this.errors[1] = "";
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
  components: {},
};
</script>