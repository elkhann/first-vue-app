<template>
  <div class="car">
    <h3>Name: {{ carName }} | {{ reverseCarName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeCarName">Change name to Opel</button>
    <button @click="changeFunc">Change name from Parent</button>
    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
import {eventEmitter} from './main.js'

export default {
  props: {
    carName: {
      type: String,
      default: 'Default auto name' 
    },
    carYear: Number,
    changeFunc: Function
  },
  methods: {
    changeCarName() {
      this.carName = 'Opel',
      this.$emit('changedCarName', this.carName)
    },
    updateCounter() {
      eventEmitter.$emit('counterUpdated', 5)
    }
  },
  computed: {
    reverseCarName() {
      return this.carName.split('').reverse().join('')
    }
  }
}
</script>

<style>

  .car {
    border: 1px solid black;
  }

  .car h3 {
    margin-bottom: 5px;
  }

</style>
