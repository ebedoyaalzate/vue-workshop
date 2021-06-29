const app = new Vue({
  el: '#app',
  data: function() {
    return {
      title: 'Hello World',
      firstName: 'Esteban',
      lastName: 'Bedoya',
      motherName: null,
      finalResult: null,
    }
  },
  computed: {
    fullName () {
      return `Mi nombre es ${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    motherName (value, oldValue) {
      console.log(`old value: ${oldValue}`)
      console.log(`new value: ${value}`)
    }
  },
  methods: {
    submit() {
      this.finalResult = `${this.fullName} y mi madre es ${this.motherName}`
    }
  }
})