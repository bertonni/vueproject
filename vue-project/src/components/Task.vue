<template>
  <div class="task-container" :class="task.isFinished ? 'finished' : ''">
    <h3 :class="task.isFinished ? 'finished' : ''">{{ task.title }}</h3>
    <div class="task-content">
      <CheckCircleIcon class="check-icon"
        :class="task.isFinished ? 'task-finished' : ''"
        @click="finishTask(id)"
      />
      <p class="task-description" :class="task.isFinished ? 'finished' : ''">
        {{ task.description }}
      </p>
      <span></span>
      <div class="remove" @click="removeTask(id)">
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

<style scoped lang="scss">
.task-container {
  /* background-color: var(--baby-blue); */
  background-color: rgba(255, 255, 255, 0.3);
  width: 90%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0.3rem 0 0.2rem 1rem;
  cursor: default;
  border-left: 6px solid transparent;
  margin: 0.7rem 0;
  min-width: 150px;
}

.task-container:hover {
  border-left-color: rgba(255, 255, 255, 0.4);
  transition: 0.3s;
  opacity: 0.8;
}

.task-content {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.3rem 0.3rem 0;
  gap: 0.5rem;
}

.task-description {
  flex-grow: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* text-align: justify; */
}

.task-description:hover {
  white-space: inherit;
}

.finished-description {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.check-icon,
svg {
  height: 2.1rem;
  width: 2.1rem;
  cursor: pointer;
}

.check-icon:hover,
svg:hover {
  opacity: 0.7;
}

.check-icon {
  min-width: 2.1rem;
}

.remove {
  color: rgba(255, 255, 255, 0.8);
}

.finished {
  text-decoration: line-through;
  /* color: #125926; */
  opacity: 0.5;
}

.task-finished {
  /* color: #125926; */
  opacity: 0.5;
}

.finished-bg {
  background-color: #6fc086;
}

.remove:hover {
  opacity: 0.8;
}

@media only screen and (min-width: 560px) {
  .task-container {
    width: 380px;
  }
}

@media only screen and (min-width: 768px) {
  .task-container {
    width: 500px;
  }
}
</style>