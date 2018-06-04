<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-car 
      :carName="carName"
      :carYear="carYear"
    ></app-car>
    <button @click="changeCarName">Change name to {{newCarName}}</button>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford',
      carYear: 2017,
      newCarName: 'Mazda'
    }
  },
  methods: {
    changeCarName() {
      this.carName = this.newCarName
    }
  },
  components: {
    appCar: Car
  }
}

</script>

<style>

</style>
