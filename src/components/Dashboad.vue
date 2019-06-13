<template>
    <div id="dashboad">
      <v-layout style="justify-content: space-around;">
        
        <v-flex xs12 sm6 md4>           
          <totalizador valor="2M" titulo="Pizza Calabreza">
            <i class="material-icons"> shopping_cart </i>  
          </totalizador>

          <totalizador valor="2M" titulo="Pizza troiana">
            <i class="material-icons"> shopping_cart </i>  
          </totalizador>

          <totalizador valor="2M" titulo="Pizza seila">
            <i class="material-icons"> shopping_cart </i>  
          </totalizador>
        </v-flex>

        <v-flex xs12 sm6 md6 id="GraficoHistorico">
          <GraficoHistorico :labels="labels" :datasets="datasets" />
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
  import totalizador from './template/Dashboad/totalizadores'
  import GraficoHistorico from './template/Dashboad/Grafico_linha'

  export default {
    components : { 
      totalizador,
      GraficoHistorico
     },
     data(){
       return {
          labels: [ 'Jan', 'Feb', 'Mar', 'Abr', 'Jun', 'Jul' ],
          datasets : [
              {
                label: 'Pizza de calabresa',
                data: [ 200, 101, 202, 303, 204, 50 ],
                backgroundColor: "rgba( 25, 118, 211, 0.7 )",
                borderColor: '#1976D2'
              },
              {
                label: 'Pizza de mussarela',
                data: [ 101, 200, 150, 300, 204, 200 ],
                backgroundColor: "rgba( 226, 18, 18, 0.7 )",
                borderColor: '#E21212'
              },
          ]
       }
     }
  }
</script>

<style scoped></style>
