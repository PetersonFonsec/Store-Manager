<template>
    <v-card class="totalizador" :style="`border-left: 3px solid ${color};`">
        <strong> {{ titulo }} </strong>
        <span class="titulo"> {{ valor }} </span>
        <slot></slot>
    </v-card>
</template>

<script>
    export default {
        props: ['valor', 'titulo', 'color'] 
    }
</script>

<style scoped>
    .totalizador{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 400px;
        margin: 20px;
        transition: .4s;
        padding: 20px 10px;
        font-size: 20px;
    }
    .totalizador:hover{
        transform: translateX( 15px );
    }
    .totalizador .titulo{

    }
</style>
