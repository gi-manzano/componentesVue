<template lang="html">
<div>
    <span v-bind:style= "estilo">
      {{ stock }}
      {{ platos }}
      {{ precio }}
    </span>
  </div>


</template>

<script >

  export default  {
    name: 'Meal-listado',
     props: {
      estilo: Object,
      stock: Number,
      platos: String,
      precio: Number
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>


</style>
