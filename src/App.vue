<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name">

    <p>{{ name }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Init'
      }
    }
  };
  
</script>

<style scoped>

</style>
