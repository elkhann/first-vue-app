<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-counter></app-counter>
    
    <app-car 
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeCarName"
      @changedCarName="carName = $event"
    ></app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford',
      carYear: 2018,
      newCarName: 'Mazda'
    }
  },
  methods: {
    changeCarName() {
      this.carName = this.newCarName
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}

</script>

<style>

</style>
