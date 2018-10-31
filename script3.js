const vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    add: function(){
      this.counter++
    },
  },
})