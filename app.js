new Vue({
  el: '#app',

  data(){
    return{
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,

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
  }
})
