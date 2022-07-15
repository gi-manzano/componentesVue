Vue.component('MealListado',{
    props: {
      estilo: Object,
      stock: Number,
      platos: String,
      precio: Number
    },

    template: //html

    `
  <div>
    <span v-bind:style= "estilo">
      {{ stock }} 
      {{ platos }}
      {{ precio }}
    </span>
  </div>
      `
      
});


 new Vue( {
    el:'#app',
    data:{

        platos: [

            {
              id: 1,
              meal: "Fideos a la boloñesa ",
              precio: 350,
              stock: 2
            },

          {
            id: 2,
            meal: "Pizza a la napolitana",
            precio: 400,
            stock: 4
          },

          {
            id: 3,
            meal: "Milanesas con pure",
            precio: 300,
            stock: 5
          },

            
          {
            id: 4,
            meal: "Ensalada caprese",
            precio: 500,
            stock: 7
          },
      
            
        ],

        estilo: {'background' : "pink"}
    },
   
});