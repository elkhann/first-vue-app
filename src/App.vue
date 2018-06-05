<template>
  <div>
    <h2>Form inputs</h2>
    
    <label>
      <input 
        type="radio" value="instagram" v-model="social"> 
        Instagram 
    </label>
    <label>
      <input 
        type="radio" value="vk" v-model="social"> 
        Vk
    </label>
    <label>
      <input 
        type="radio" value="fb" v-model="social"> 
        Fb
    </label>

    <hr>

    <ul>
      <li>{{ social }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        social: 'vk'
      }
    }
  };
  
</script>

<style scoped>

</style>
