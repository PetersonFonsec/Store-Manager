<template>
    <div id="dashboad">
      <v-container grid-list-md >
        <v-layout  wrap>          
          <v-flex xs12 sm6 md6>
          
            <Grafico
              :labels="graficoBarra.labels" 
              :datasets="graficoBarra.datasets" 
              id="Grafico_Barra"
              type="bar"/>

          </v-flex>

          <v-flex xs12 sm6 md6>
            
            <Grafico
              :labels="graficoLinha.labels"
              :datasets="graficoLinha.datasets" 
              id="Grafico_linha"
              type="line"/>

          </v-flex>
          
          <v-flex xs12>
            
            <Grafico
              :labels="graficoLinha.labels"
              :datasets="graficoLinha.datasets" 
              id="Grafico_Barra_Horizontal"
              type="horizontalBar"/>

          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
  import Grafico from './template/Dashboad/Grafico'

  export default {
    components : { Grafico },
    data(){
      return {
        graficoLinha:{
          labels: [ 'Jan', 'Feb', 'Mar', 'Abr', 'Jun', 'Jul' ],
          datasets : [
            {
              label: 'Lucros',
              data: [ 200, 101, 202, 303, 204, 50 ],
              backgroundColor: "rgba( 25, 118, 211, 0.7 )",
              borderColor: '#1976D2'
            },
            {
              label: 'Gastos',
              data: [ 101, 200, 150, 300, 204, 200 ],
              backgroundColor: "rgba( 226, 18, 18, 0.7 )",
              borderColor: '#E21212'
            },
          ]
        },
        graficoBarra:{
          labels: [ 'Jan', 'Feb', 'Mar', 'Abr', 'Jun', 'Jul' ],
          datasets : [
            {
              label:'teste1',
              backgroundColor: "rgba( 151, 187, 205, 0.5)",
              data: [ 65, 34, 80, 98, 34, 45, 50 ]
            },
            {
              label:'teste2',
              backgroundColor: "rgba( 28, 205, 124, 0.5)",
              data: [ 50, 50, 50, 50, 50, 50, 50 ]
            },
          ]
        }
      }
    }
  } 
</script>

<style scoped></style>
