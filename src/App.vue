<template>
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredNames" :key="name.id">
        {{ name }}
      </li>
    </ul>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hello I\'m Vue',
      searchName: '',
      names: ['Vlad', 'Max', 'Lena', 'Igor']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.indexOf(this.searchName) != -1
      })
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}

</script>

<style>

</style>
