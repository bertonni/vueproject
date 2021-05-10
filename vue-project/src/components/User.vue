<template>
  <div>
    <h1>Hello, {{ username }}</h1>
    <Counter v-bind:value=value />
    <button @click="value-=20">- 20</button>
    <button @click="value-=10">- 10</button>
    <button @click="value--">- 1</button>
    <button @click="value++">+ 1</button>
    <button @click="value+=10">+ 10</button>
    <button @click="value+=20">+ 20</button>

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
        newUsername: 'newUsername'
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
    // props: {
    //   username: String,
    // },
  }
</script>

<style>
  button {
    padding: 0.5 1rem;
    margin: 0 0.5rem 1rem;
    cursor: pointer;
  }
</style>
