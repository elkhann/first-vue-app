<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name">
    <p>{{ name }}</p>

    <hr>

    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Init input',
        textarea: 'Init textarea'
      }
    }
  };
  
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }
  p{
    white-space: pre;
  }
</style>
