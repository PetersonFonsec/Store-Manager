<template>
    <div id="formulario">
        <v-dialog v-model="dialog" max-width="600px">
        
            <template v-slot:activator="{ on }">
                 <v-btn color="info" @click="dialog = true">
                    <v-icon>edit</v-icon>
                </v-btn>
            </template>

            <Formulario 
                :cliente="cliente"
                @cancelarCliente="dialog = true"
                @submitCliente="alterarCliente"/>
        </v-dialog>
    </div>
</template>

<script>
import { novoCliente, umCliente } from '@/graphql/Cliente'
import Formulario from './Formulario'

export default {
    components : { Formulario },
    props:['id'],
    data(){
        return {
            dialog: false,
            cliente:{},
        }
    },
    methods:{
        async alterarCliente(){
            
            if( this.validCampos() ) return null

            const result = await this.$api.mutate({
                mutation: novoCliente,
                variables: {
                    dados: { ...this.cliente }
                }
            })

            if(result.data.novoCliente) this.$emmit('reload')

            this.dialog = false
        },

        async buscarCliente(id){

            const filtro =  { id }

            const result = await this.$api.query({
                query: umCliente,
                variables: { filtro }
            })

            const { cliente } = result.data

            if( cliente ) this.cliente = cliente
            
        }
    },
    mounted(){
        if(this.id) this.buscarCliente(this.id)
    }

}
</script>