export default {
  data() {
    return {
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
  }
};
