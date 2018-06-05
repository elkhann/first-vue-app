<template>
  <div>
    <h2>Form inputs</h2>
    
    <select v-model="social">
      <option v-for="social in socialList" :key="social">{{ social }}</option>
    </select>
    <p>{{ social }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        defaulSocial: 'insagramm',
        social: 'insagramm',
        socialList: ['vkontakte', 'facebook', 'insagramm'],
        
      }
    }
  };
  
</script>

<style scoped>

</style>
