<template>
  <div class="contaner">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          v-model="email"
        >
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: ''
      }
    }
  }  
</script>

<style scoped>

</style>
