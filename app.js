new Vue({
  el: '#app',

  data(){
    return{
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,

      symbol: 'BTC',

      value: 0,

      color: 'f4f4f4',

      price: 8400,

      pricesWithDays: [

        {day: 'Lunes', value: 8400},
        {day: 'Martes', value: 8600},
        {day: 'Miércoles', value: 8200},
        {day: 'Jueves', value: 8800},
        {day: 'Viernes', value: 8100},
        {day: 'Sábado', value: 8700},
        {day: 'Domingo', value: 8900}

      ],

      showPrices: false
    }
  },

//aqui defino funciones
  methods:{
    toggleShowPrices(){
      this.showPrices =!this.showPrices

      this.color = this.color.split('').reverse().join('')
    }
  },

  //watchers

  watch:{
    showPrices(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },

//computed properties
  computed:{
    title(){
      return `${this.name} - ${this.symbol}`
    },

    convertedValue(){
      if(!this.value){
        return 0
      }
      return this.value / this.price
    },
  }
}),

new Vue({
  el: '#app2',

  data(){
    return{
      titleProject2: 'Cursos 2020',

      courses: [],
        title: '',
        time: '',

        id: '#',
        curso: 'Curso',
        horas: 'Horas',

    }
  },

  methods:{
    addCourse(){
      if(this.title && this.time){
        this.courses.push({
          title: this.title,
          time: this.time
        })
      }
      this.title = ''.
      this.time = '',
      console.log(typeof this.time)
    }
  },

  computed:{
    totalTime(){
      let total = 0
      this.courses.map(function(course){
        total += Number(course.time)
      })
      return total
    }
  }
}),

//components

Vue.component('counter',{
  data(){
    return{
      counter: 0,

    }


  },

  methods:{
    increments(){
      this.counter += 1
    }
  },

  template: `

  <div>
    <button v-on:click="increments"> Click me!</button>
    <span>{{counter}}</span>
  </div>

  `
})


new Vue({
  el: '#app3',

  data(){
    return{
      title: 'hola',

    }
  }
})
