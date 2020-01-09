var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
})

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome"}
      ]
  }
})

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!"
  }
})

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
})

var app7 = new Vue({
  el: "#app-7",
  data: {
    message: "",
    groceryList : [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  },
  methods: {
    addText: function() {
      if (this.message) {
        this.groceryList.push({ id: this.groceryList.length, text: this.message });
      }
    },
    deleteText: function() {
      if (this.groceryList.length != 0) {
        this.groceryList.pop();
      }
    }
  }
})

var app8 = new Vue({
  el: "#app-8",
  computed: {
    datetime: function(){
      return new Date();
    }
  }
})

var app9= new Vue({
  el: "#app-9",
  data: {
    count: 0
  },
  computed: {
    isMultipleOf4: function(){
      return this.count%4==0;
    },
    isMultipleOf2: function(){
      return this.count%2==0;
    }
  },
  methods: {
    countUp: function(){
      this.count += 1;
    },
    countDown: function(){
      if (this.count != 0 ) {
        this.count -= 1;
      }
    }
  }
})

var app10 = new Vue({
  el: "#app-10",
  data: {
    count: 0,
  },
  computed: {
    fizzBuzz: function(){
      if (this.count%3==0 && this.count%15==0) {
        return "FizzBuzz"
      } else if (this.count%5==0) {
        return "Buzz"
      } else if (this.count%3==0) {
        return "Fizz"
      } else {
        return this.count
      }
    }
  },
  methods: {
    countUp: function(){
      this.count += 1;
    },
    countDown: function(){
      if (this.count != 0 ) {
        this.count -= 1;
      }
    }
  }
})
