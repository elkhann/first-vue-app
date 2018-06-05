<template>
  <div>
    <h2>Form inputs</h2>
    
    <label>
      <input 
        type="checkbox" 
        value="instagram" 
        v-model="social"> 
          Instagram 
    </label>
    <label>
      <input 
        type="checkbox" 
        value="vk"        
        v-model="social"> 
          Vk
    </label>
    <label>
      <input 
        type="checkbox" 
        value="fb"        
        v-model="social"> 
          Fb
    </label>

    <hr>

    <ul>
      <li v-for="el in social">{{ el }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        social: ['vk']
      }
    }
  };
  
</script>

<style scoped>

</style>
