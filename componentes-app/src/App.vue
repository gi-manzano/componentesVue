<template>
  <div id="app">

        <table class="table">
            <thead class="head">
              <tr>
                <td>Meal</td>
                <td >Precio</td>
                <td>Stock</td>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr v-for="(item) in platos" :key="item.id">
                <td> <Meal-listado :estilo="estilo" :platos="item.meal"></Meal-listado></td>
                <td>$<Meal-listado :precio="item.precio"></Meal-listado></td>
                <td> <Meal-listado :stock="item.stock"></Meal-listado></td>
              </tr>
            </tbody>
        </table>

  </div>
</template>

<script>
import MealListado from '../src/components/MealListado.vue'


export default {
  name: 'App',

  components: {
    MealListado
  },
  data () {
     return {
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
     }
  }
}
</script>

<style>
.head {
    background-color: yellowgreen;
    padding: auto;
    width: 14px;
}

.tbody {
    background-color: azure;
}
</style>
