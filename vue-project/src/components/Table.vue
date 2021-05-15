<template>
  <div class="hello flex justify-center">
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.title">
            <td class="number">{{ index + 1 }}</td>
            <td class="title text-left">{{ item.title }}</td>
            <td class="description text-left">{{ item.description }}</td>
            <td class="deadline">{{ getFormattedDate(item.deadline) }}</td>
            <td class="actions">
              <a
                href="#"
                @click.prevent="removeTask(index)"
                class="btn btn-danger"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    data: Object,
  },
  methods: {
    getFormattedDate(date) {
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    removeTask(taskIndex) {
      this.$store.commit("setRemoveTask", taskIndex);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  border: none;
  border-collapse: collapse;

  thead {
    tr {
      border-bottom: 3px solid lightgray;
      height: 3rem;
    }
    tr:nth-child(odd) {
      background: #dfdfdf;
    }
  }

  tbody tr:hover {
    color: var(--white);
    background: #454545;
    cursor: pointer;
  }

  tr:nth-child(even) {
    background: #dfdfdf;
  }
  tr:nth-child(odd) {
    background: #efefef;
  }
  tr {
    border-bottom: 1px solid lightgray;
    height: 3rem;
  }
}

.number {
  width: 3rem;
}
.title {
  width: 8rem;
}
.description {
  width: 26rem;
}
.deadline {
  width: 8rem;
}
.actions {
  width: 12rem;
}
</style>
