<template>
    <v-alert
        dark
        border="left"
        icon="mdi-home"
        transition="scale-transition"
        type="error"
        v-model="mostrar"
        > {{ mensagem }}
    </v-alert>
</template>

<script>
export default {
    props: {
        mensagem:{
            require: true,
            type: String
        }
    },
    data(){
        return {
            mostrar: true
        }
    }
}
</script>

<style>

</style>