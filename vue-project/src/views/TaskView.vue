<template>
<div class="flex items-center justify-center">
  <div class="w-11/12 sm:w-9/12 max-w-2xl min-h-36 flex flex-col items-center 
      pt-4 mt-2 rounded">
    <div class="flex flex-col items-center overflow-y-auto min-h-112 max-h-112 
      w-full bg-white bg-opacity-10 rounded py-3 backdrop-filter 
      backdrop-blur-sm">
      <h1 class="text-white text-2xl">teste {{$route.params.id}}</h1>
      <router-link to="/" class="text-white text-lg">Voltar</router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'TaskView',
  computed: {
    
  }
}
</script>