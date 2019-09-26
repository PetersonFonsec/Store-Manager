<template>
    <v-dialog v-model="dialog" max-width="600px">

        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="ml-3" v-on="on">
                <v-icon>add</v-icon>
            </v-btn>
        </template>

        <Formulario 
            @cancelarCliente="dialog = true"
            @submitCliente="criarCliente"/>

    </v-dialog>
</template>

<script>
import { novoCliente } from '@/graphql/Cliente'
import Formulario from './Formulario'

export default {
    components : { Formulario },
    data(){
        return {
            dialog: false,
        }
    },
    methods:{
        async criarCliente(cliente){

            const result = await this.$api.mutate({
                mutation: novoCliente,
                variables: {
                    dados: { ...cliente }
                }
            })

            if(result.data.novoCliente) this.$emmit('reload')

            this.dialog = false
        },
    },

}
</script>

<style>

</style>