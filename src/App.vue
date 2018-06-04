<template>
  <div>
    <h2 v-colored:background.font="'red'" v-colored:color="'white'">{{ title }}</h2>
    <h2 v-colored:color.delay.font="'blue'">{{ title }}</h2>

    <h2 v-font>{{ title2 }}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hello, I\'m Vue',
      title2: 'Local font directive',
      visible: true
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '40px'
      }
    }
    
  }
}

</script>

<style>

</style>
