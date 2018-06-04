<template>
  <div>
    <h2 v-colored="'navy'">{{ title }}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hello, I\'m Vue',
      visible: true
    }
  }
}

</script>

<style>

</style>
