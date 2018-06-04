<template>
  <div>
    <h2 v-colored:background.font="'red'" v-colored:color="'white'">{{ title }}</h2>
    <h2 v-colored:color.delay.font="'blue'">{{ title }}</h2>
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
