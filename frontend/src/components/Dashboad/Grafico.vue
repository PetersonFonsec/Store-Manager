<template>
    <v-card class="Grafico">
        <canvas :id="id"></canvas>
    </v-card>
</template>

<script>
    import Chart from "chart.js";
    export default {
        props:[ 'datasets', 'labels', 'type', 'id' ],
        mounted(){
            const canvas = document.querySelector(`#${ this.id }`).getContext('2d')
            
            new Chart( canvas, {
                type: this.type,
                data:{
                    labels: this.labels,
                    datasets: this.datasets
                }
            });
        }
    }
</script>

<style scoped>
    .Grafico{
       padding: 10px 5px;
    }
</style>
