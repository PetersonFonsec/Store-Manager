<template>
    <v-card class="Grafico_linha">
        <canvas id="Grafico"></canvas>
    </v-card>
</template>

<script>
    import "chart.js";
    export default {
        props:[ 'datasets', 'labels' ],
        mounted(){
            const canvas = document.querySelector('#Grafico').getContext('2d')
            
            // eslint-disable-next-line
            new Chart( canvas, {
                type: 'line',
                data: { 
                    labels: this.labels,
                    datasets : this.datasets
                } 
            });
        }
    }
</script>

<style>
    .Grafico_linha{
       padding: 10px 5px;
    }
</style>
