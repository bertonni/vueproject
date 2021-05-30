<template>
  <div>
    <h1>Hello, {{ username }}</h1>
    <Counter :value=value />

    <button v-for="val of values" :key="val" @click="value+=val">{{val}}</button>

    <form action="#">
      <input type="text" ref="username">
      <button type="submit" @click.prevent="changeUsername">Set Name</button>
    </form>
  </div>
</template>

<script>
  import Counter from './Counter.vue';
  import { mapState } from 'vuex';

  export default {
    data: function () {
      return {
        value: 0,
        newUsername: 'newUsername',
        values: [-20, -10, -1, +1, +10, +20]
      };
    },
    name: 'User',
    computed: {
      ...mapState(['username'])
    },
    methods: {
      handleClick() {
        return this.$store.commit("setCounter", this.value);
      },
      changeUsername() {
        if (this.$refs.username.value.trim() == '') return;
        this.newUsername = this.$refs.username.value.trim();
        this.$store.commit('setUsername', this.newUsername);
        this.$refs.username.value = '';
      }
    },
    components: {
      Counter,
    },
  }
</script>

<style>
  button {
    padding: 0.5 1rem;
    margin: 0 0.5rem 1rem;
    cursor: pointer;
  }
</style>
