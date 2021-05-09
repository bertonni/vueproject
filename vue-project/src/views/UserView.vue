<template>
  <div class="userView">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <User username="Teste"/>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User.vue'

export default {
  name: 'UserView',
  components: {
    User
  }
}
</script>