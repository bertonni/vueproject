<template>
<div>
  <div class="text-white absolute right-6 z-20 cursor-pointer"
  @click.prevent="setBgColor">
    <button class="px-6 py-4">Set Background</button>
  </div>
  <router-view />
</div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    setBgColor() {
      console.log('clicked');
    }
  }
}
</script>