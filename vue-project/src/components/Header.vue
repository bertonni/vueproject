<template>
  <div class="header">
    <h1>BAD BOYS, BAD BOYS</h1>
    <p>Whatcha gonna do? Whatcha gonna do when they come for you?</p>
    <p>You need to do something, and we'll help you (If it's not illegal, of course)</p>
  </div>  
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState([])
  },
  methods: {

  }
}
</script>

<style scoped>
  .header {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }
  /* .header h1,
  .header p {
    font-family: 'Reggae One', cursive;
  } */
</style>