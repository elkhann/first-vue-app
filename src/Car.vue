<template>
  <div class="car">
    <h3>Name: {{ carName }} | {{ reverseCarName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeCarName">Change name to Opel</button>
    <button @click="changeFunc">Change name from Parent</button>
  </div>
</template>

<script>
export default {
  // props: ['carName','carYear'],
  // props: {
  //   carName: String,
  //   carYear: Number
  // },
  props: {
    carName: {
      type: String,
      // required: true,
      default: 'Default auto name' 
    },
    carYear: Number,
    changeFunc: Function
  },
  methods: {
    changeCarName() {
      this.carName = 'Opel',
      this.$emit('changedCarName', this.carName)
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
