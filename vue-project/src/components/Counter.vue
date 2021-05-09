<template>
  <div>
    <h1>Counter: {{value}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    props: {
      value: Number,
    }
  }
</script>

<style>

</style>