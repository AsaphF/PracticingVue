var app = new Vue({
    el: '#app',
    data: {
      seen: true
    }
  })

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
}
})
var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Criar algo incrível' }
      ]
    }
  })
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Olá Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Olá Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetais' },
        { id: 1, text: 'Queijo' },
        { id: 2, text: 'Qualquer outra coisa que humanos podem comer' }
      ]
    }
  })