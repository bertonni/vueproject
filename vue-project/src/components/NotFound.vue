<template>
  <div class="flex h-screen bg-white items-center justify-center bg-opacity-10">
    <div class="backdrop-filter backdrop-blur-sm h-40 px-6 py-6 w-96 flex flex-col
     bg-white bg-opacity-20 rounded flex items-center justify-center">
      <h1 class="text-white text-2xl text-center">Oops, It seems the page you're looking for does not exist</h1>
      <router-link
        class="px-6 py-3 rounded bg-green-500 text-white mt-4 text-bold
          hover:opacity-80"
        to="/"
      >
        Back to Homepage
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>